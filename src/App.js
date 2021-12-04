import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import MostrarCitas from './Components/MostrarCitas';



function App() {

  //Citas en localStorage
  let citasIniciales=JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[];
  }

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //UseEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    if(localStorage){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  })

  //Funcion que tome las citas actuales y agregue la nueva
  let crearCita = cita => {
    guardarCitas([
      ...citas, 
      cita
    ]);
  }

  //Funcion que elimina una cita por su id
  let eliminarCita = id => {
    let nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //Mensaje Condicional
  // let titulo = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas';
  let titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <MostrarCitas
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}/>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;




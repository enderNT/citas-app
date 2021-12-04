import React, {Fragment, useState} from 'react';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
        hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }
        //Eliminar mensaje de error
        actualizarError(false)
        
        //crear idRandom
        cita.id=parseInt(Math.random()*1000);
        
        //Crear una cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (

        <Fragment>
            <h2>Crear Cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
            onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input 
                type="text" 
                name="mascota" 
                placeholder="Nombre mascota"
                className="u-full-width"
                onChange={actualizarState}
                value={mascota}/>

                <label>Nombre dueño</label>
                <input 
                type="text" 
                placeholder="Nombre dueño mascota" 
                name="propietario"
                className="u-full-width"
                onChange={actualizarState}
                value={propietario}/>

                <label>Fecha</label>
                <input 
                type="date" 
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}/>

                <label>Hora</label>
                <input 
                type="time" 
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}/>

                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}></textarea>

                <button 
                type="submit" 
                className="u-full-width button-primary">Agregar cita</button>
            </form>
        </Fragment>

    );
}

export default Formulario;
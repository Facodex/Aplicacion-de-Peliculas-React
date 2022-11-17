import React from 'react'
import { useState } from 'react';
import { SaveItemInStorage } from '../helpers/SaveItemInStorage';

export const Crear = ({ListadoState, setListadoState}) => {

    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo : '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        setPeliState(peli);

        setListadoState([...ListadoState, peli]);

        SaveItemInStorage(peli, 'pelis');
    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <span>{(titulo && descripcion) && "Has guardado la pelicula "+ titulo}</span>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
            <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}

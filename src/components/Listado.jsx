import React, { useEffect } from 'react'
import { useState } from 'react';
import { Editar } from './Editar';

export const Listado = ({ListadoState, setListadoState}) => {

  const [editar, setEditar] = useState(0);

  useEffect(() => {

    let listado_peliculas = JSON.parse(localStorage.getItem('pelis'));
    setListadoState(listado_peliculas);

  },[setListadoState]);

  const DeletePeli = (id) =>{
    // get pelis of localS 
    let list = JSON.parse(localStorage.getItem('pelis'));

    // remove peli selected
    let new_list = list.filter(peli => peli.id !== parseInt(id) );

    // update the list 
    setListadoState(new_list);
    
    // update de localS 
    localStorage.setItem("pelis", JSON.stringify(new_list));

  }

  return (
    <>      
      {
        ListadoState !== null ?
        ListadoState.map(peli =>{
          return(
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={ () => {setEditar(peli.id)}}>Editar</button>
              <button onClick={ () => {DeletePeli(peli.id)}} className="delete">Borrar</button>

              {
                editar === peli.id &&(
                  <Editar peli={peli}
                          setEditar={setEditar}
                          setListadoState={setListadoState}
                  ></Editar>
                )
              }  
            </article>
          );
        })
        :
        <h1>No hay peliculas</h1>
      }

        
        
    </>
  )
}


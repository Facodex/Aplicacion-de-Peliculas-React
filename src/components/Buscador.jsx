import React from 'react'
import { useState } from 'react'

export const Buscador = ({ListadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');

  const buscarPeli = (e) =>{
    // update state busqueda 
    setBusqueda(e.target.value);

    // get array of peliculas and filter 
    let pelis_encontradas = ListadoState.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda);
    });

    // check to fill the listadoState for the view 
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
    }

    setListadoState(pelis_encontradas);
  }
  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        <form>
            <input type="text"
              id="search_field" 
              name="busqueda"
              autoComplete='off'
              onChange={buscarPeli}
            />

            <button id="search">Buscar</button>
        </form>
    </div>
  )
}

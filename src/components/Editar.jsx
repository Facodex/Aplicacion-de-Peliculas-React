import React from 'react'

export const Editar = ({peli, setListadoState, setEditar}) => {

    const setEdicion = (e, id) =>{
        e.preventDefault();

        // get pelis of storage 
        let pelis_list = JSON.parse(localStorage.getItem('pelis'));

        // get values of form 
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // save new item with new info
        let peli_actualizada = {
            id: id,
            titulo,
            descripcion
        }

        // find index of array of local with id that comes to me 
        let indice = pelis_list.findIndex(peli => peli.id === id);

        // replace old info for new info 
        pelis_list[indice] = peli_actualizada;

        // refresh localS with new array modify 
        localStorage.setItem("pelis", JSON.stringify(pelis_list));

        // update states to refresh view and hide form
        setListadoState(pelis_list);

        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3>Editar</h3>
        <form onSubmit={e =>{ setEdicion(e, peli.id)}}>
            <input
                type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue={peli.titulo}
            />

            <textarea
                name="descripcion"
                className='descripcion_editada'
                defaultValue={peli.descripcion}
            />

            <input type="submit" className='editar' value='actualizar'/>

        </form>
    </div>
  )
}

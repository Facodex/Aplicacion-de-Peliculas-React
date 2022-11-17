import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    const [ListadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/* <!--Cabecera--> */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>Mis Pelis</h1>
        </header>

        {/* <!--Contenido principal--> */}
        <section id="content" className="content">

            {/* <!--aqui van las peliculas--> */}
            <Listado ListadoState={ListadoState} setListadoState={setListadoState}></Listado>

        </section>

        {/* <!--Barra lateral--> */}
        <aside className="lateral">
            
            <Buscador ListadoState={ListadoState} setListadoState={setListadoState}></Buscador>

            <Crear setListadoState={setListadoState} ListadoState={ListadoState} ></Crear>
        </aside>

        {/* <!--Pie de página--> */}
        <footer className="footer">
            &copy; Máster en React - <a href="https://facodex.tech">facodex.tech</a>
        </footer>

    </div>
  );
}

export default App;

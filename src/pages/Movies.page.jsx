import { useEffect, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenedorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

import data from "../resources/data"

const MoviesPage = () => {
    // Variables de estado
    const [modoVisualizacion, setModoVisualizacion] = useState(1)
    const [listaPeliculas, setListaPeliculas] = useState([])


    useEffect( () => {
        const dataFetch = async () => {
            const resp = await fetch("http://localhost:5000/movies")
            const data = await resp.json()
            setListaPeliculas(data.data)
            //console.log(data)
            return data
        }
        
        dataFetch()
    }, [])

    // temporal
    //const listaPeliculas = data.data


    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral cambiarModo={setModoVisualizacion}
                    modo={ modoVisualizacion }/>
            </div>
            <div className="col-9">
                <ContenedorTabs modo={modoVisualizacion} 
                    peliculas={listaPeliculas}/>
            </div>
        </div>
    </div>
}


export default MoviesPage
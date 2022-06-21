import { useEffect, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenedorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

import data from "../resources/data"

const MoviesPage = () => {
    // Variables de estado
    const [modoVisualizacion, setModoVisualizacion] = useState(1)
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [faseSeleccionada, setFaseSeleccionada] = useState(0)


    useEffect( () => {
        const dataFetch = async () => {
            let url = "http://localhost:5000/movies"
            if (faseSeleccionada > 0) {
                url += `?fase=${faseSeleccionada}`
            }
            const resp = await fetch(url)
            const data = await resp.json()
            setListaPeliculas(data.data)
            //console.log(data)
            return data
        }
        
        dataFetch()
    }, [faseSeleccionada])

    const onFaseSeleccionadaChange = (evt) => {
        setFaseSeleccionada(evt.target.value)
    }


    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral cambiarModo={setModoVisualizacion}
                    modo={ modoVisualizacion }/>
            </div>
            <div className="col-9">
                <div>
                    <label>Elija la fase:</label>
                    <select value={ faseSeleccionada } 
                        className="form-select"
                        onChange={ onFaseSeleccionadaChange }>
                        <option value={"0"}>Todas las fases</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                    </select>
                </div>
                <ContenedorTabs modo={modoVisualizacion} 
                    peliculas={listaPeliculas}/>
            </div>
        </div>
    </div>
}


export default MoviesPage
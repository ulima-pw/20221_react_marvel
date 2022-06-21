import { useState } from "react"

const FilaPelicula = (props) => {
    const [tipoVisualizacion, setTipoVisualizacion] = useState("lectura")
    const [peliculaTitulo, setPeliculaTitulo] = useState(props.pelicula.title)
    const [peliculaFechaEstreno, setPeliculaFechaEstreno] = useState(props.pelicula.release_date)
    const [peliculaRecaudacion, setPeliculaRecaudacion] = useState(props.pelicula.box_office)
    const [peliculaFase, setPeliculaFase] = useState(props.pelicula.phase)
    const [peliculaEscenasPostcredito, setPeliculaEscenasPostCredito] = useState(props.pelicula.post_credit_scenes)

    const onPeliculaTituloChange = (evt) => {
        setPeliculaTitulo(evt.target.value)
    }

    const onPeliculaFechaLanzamientoChange = (evt) => {
        setPeliculaFechaEstreno(evt.target.value)
    }

    const onPeliculaRecaudacionChange = (evt) => {
        setPeliculaRecaudacion(evt.target.value)
    }

    const onPeliculaFaseChange = (evt) => {
        setPeliculaFase(evt.target.value)
    }

    const onPeliculaEscenasPostcreditoChange = (evt) => {
        setPeliculaEscenasPostCredito(evt.target.value)
    }

    const guardarPeliculaOnClick = () => {
        const pelicula = {
            id : props.pelicula.id,
            titulo : peliculaTitulo,
            fechaEstreno : peliculaFechaEstreno,
            recaudacion : peliculaRecaudacion,
            fase : peliculaFase,
            escenasPostcredito : peliculaEscenasPostcredito
        }

        // fetch() // POST
        console.log("Se debio guardar la pelicula: ",  pelicula)
    }

    const cambiarTipoFila = () => {
        if (tipoVisualizacion === "lectura") {
            setTipoVisualizacion("escritura")
        }else {
            setTipoVisualizacion("lectura")
        }
    }


    if (tipoVisualizacion === "lectura"){
        return <tr>
            <td>{ props.pelicula.id }</td>
            <td>{ props.pelicula.title }</td>
            <td>{ props.pelicula.release_date }</td>
            <td>{ parseInt(props.pelicula.box_office).toLocaleString() }</td>
            <td>{ props.pelicula.phase }</td>
            <td>{ props.pelicula.post_credit_scenes }</td>
            <td>
                <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
            </td>
        </tr>
    }else {
        return <tr>
            <td>{ props.pelicula.id }</td>
            <td>
                <input type={"text"} value={ peliculaTitulo } 
                    onChange={ onPeliculaTituloChange } />
            </td>
            <td>
                <input type={"text"} value={ peliculaFechaEstreno } 
                    onChange={ onPeliculaFechaLanzamientoChange }/>
            </td>
            <td>
                <input type={"text"} 
                    value={ parseInt(peliculaRecaudacion).toLocaleString() } 
                    onChange={ onPeliculaRecaudacionChange }/>
            </td>
            <td>
                <input type={"text"} value={ peliculaFase } 
                    onChange={ onPeliculaFaseChange }/>
            </td>
            <td>
                <input type={"text"} value={ peliculaEscenasPostcredito } 
                    onChange={ onPeliculaEscenasPostcreditoChange }/>
            </td>
            <td>
                <button className="btn btn-primary btn-sm" type="button" 
                    onClick={ guardarPeliculaOnClick }>Guardar</button>
                <button className="btn btn-primary btn-sm" type="button" 
                    onClick={cambiarTipoFila}>Cancelar</button>
            </td>
        </tr>
    }

}

export default FilaPelicula
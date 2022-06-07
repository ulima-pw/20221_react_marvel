const CardPelicula = (props) => {
    return <div className="card">
        <img src={ props.pelicula.cover_url } 
            className="card-img-top" alt="..."/>
        <div className="card-body">
            <h3 className="card-title">{ props.pelicula.title }</h3>
            <p className="card-text">
                { props.pelicula.overview }
            </p>
            <div className="row">
                <div className="col-4">Director:</div>
                <div className="col-4">{ props.pelicula.directed_by }</div>
            </div>
            <div className="row">
                <div className="col-4">Saga:</div>
                <div className="col-4">{ props.pelicula.saga }</div>
            </div>
            <button className="btn btn-primary mt-3">Seleccionar</button>
        </div>
    </div>
}

export default CardPelicula
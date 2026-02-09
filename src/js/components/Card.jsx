export default function Card(props) {
    return (
        <div className="col-sm-12 col-lg-3">
            <div className="card h-100">
                <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
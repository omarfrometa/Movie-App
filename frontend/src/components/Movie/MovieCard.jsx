import { Link } from "react-router-dom"

export const MovieCard = ({ Id, Title, Type, Year, Poster }) => {
    return (
        <Link to={`/movie/${Id}`}>

            <div className="container" >
                <div className="row justify-content-center gx-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <img src={Poster} alt="" style={{ width: 200 }} />
                    <div className="col-md-6 col-lg-8 col-12">
                        <h6 className="card-title">{Title}</h6>
                        <p className="card-text"><small className="text-secondary">{Type}</small></p>
                        <p className="card-text"><small className="text-secondary">{Year}</small></p>
                    </div>
                </div>
            </div>

        </Link>
    )
}
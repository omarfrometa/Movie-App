
import { MovieCard } from "./MovieCard"


export const MovieList = ({ searchData }) => {

    return (
        <div className="container" style={{ minHeight: '80vh' }}>
            <div className="row row-cols-lg-5 row-cols-md-4 row-cols-2 g-3 g-lg-4 mb-3">
                {
                    searchData.map(movie => (
                        <MovieCard
                            key={movie.imdbID}
                            Title={movie.Title}
                            Type={movie.Type}
                            Year={movie.Year}
                            Poster={movie.Poster}
                        />
                    ))
                }
            </div>
        </div>
    )
}

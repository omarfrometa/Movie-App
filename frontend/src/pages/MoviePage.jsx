import { useParams } from "react-router-dom"
import { Loading, Navbar, } from "../components"
import { useFetch } from "../hooks"


export const MoviePage = () => {
  const { id } = useParams()
  const { data, isLoading } = useFetch(`https://www.omdbapi.com/?apikey=337f4251&i=${id}`)

  const { Title, Year, Rated, Genre, Poster, Director, Actors, Released, imdbRating } = !!data && data
  return (
    <>
      <Navbar />
      {
        isLoading
          ? <Loading />
          :
          <>
            <div className="container" >
              <div className="row justify-content-center gx-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <img src={Poster} alt="" style={{ width: 200 }} />
                <div className="col-md-6 col-lg-8 col-12">
                  <h2>{Title}</h2>
                  <p>Actors: {Actors}</p>
                  <p>Director: {Director}</p>
                  <p>Year: {Year}</p>
                  <p>Rated: {Rated}</p>
                  <p>Rating: {imdbRating}</p>
                  <p>Genre: {Genre}</p>
                  <p>Released: {Released}</p>
                </div>
              </div>
            </div>

          </>
      }
    </>
  )
}
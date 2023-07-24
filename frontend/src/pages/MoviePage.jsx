import { useParams } from "react-router-dom"
import { Loading, Navbar, } from "../components"
import { useFetch } from "../hooks"


export const MoviePage = () => {
  const { title } = useParams()
  const { data, isLoading } = useFetch(`https://www.omdbapi.com/?apikey=337f4251&t=${title}`)

  const { Title, Year, Rated, Release, Genre, Poster, Actors } = !!data && data
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
                  <p>{Actors}</p>
                  <p>{Year}</p>
                  <p>{Rated}</p>
                  <p>{Release}</p>
                  <p>{Genre}</p>
                </div>
              </div>
            </div>

          </>
      }
    </>
  )
}
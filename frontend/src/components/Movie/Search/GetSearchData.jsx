import { useContext, useState } from "react"
import { SearchContext } from "../../../context/SearchContext"
import { useFetch } from "../../../hooks"
import { Loading } from "../.."
import { Results } from "./Results"
import { MovieList } from "../MovieList"
import { PaginationComponent } from "../../UI/PaginationComponent"

export const GetSearchData = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { search } = useContext(SearchContext)

  const { data, isLoading } = useFetch(`https://www.omdbapi.com/?apikey=337f4251&s=${search}&page=${currentPage}`)

  const dataSortByYear = data?.Search.sort((a, b) => {
    return b.Year - a.Year;
  });

  if (!search) {
    return <p>Please enter a search query.</p>
  }

  return (
    <>
      {
        isLoading ?
          <Loading />
          : <>
            <Results total={data?.totalResults} search={search} />
            <MovieList searchData={dataSortByYear} />
            <PaginationComponent totalPages={data?.totalResults} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
      }
    </>
  )
}


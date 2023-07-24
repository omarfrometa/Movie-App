
import { useNavigate } from "react-router-dom"
import { SearchContext } from "../../../context/SearchContext"
import { useForm } from "../../../hooks"
import { useContext } from "react"

export const SearchForm = () => {

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: '',
    })

    const { setSearch } = useContext(SearchContext)

    const navigate = useNavigate()

    const onSearchSubmit = event => {
        event.preventDefault()

        setSearch(searchText)
        navigate('/search', {
            replace: true
        })


        onResetForm()
    }

    return (
        <form
            className="d-flex"
            role="search"
            onSubmit={onSearchSubmit}
        >
            <input
                required
                className="form-control me-2"
                type="search"
                placeholder="Search movie"
                name="searchText"
                value={searchText}
                onInput={onInputChange}
            />
            <button className="btn btn-danger" type="submit">Search</button>
        </form>
    )
}
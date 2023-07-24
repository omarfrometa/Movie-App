import { NavLink } from "react-router-dom"
import { SearchForm } from "../Movie"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4 flex-shrink-0" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    OMDb API

                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
                    <SearchForm />
                </div>
            </div>
        </nav>
    )
}



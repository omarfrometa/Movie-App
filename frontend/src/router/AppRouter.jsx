import { Navigate, Route, Routes } from "react-router-dom"
import { MoviePage, SearchPage } from "../pages"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:title" element={<MoviePage />} />

            <Route path="/*" element={<Navigate to='/search' />} />
        </Routes>
    )
}
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage/HomePage'
import {PokedexPage} from '../pages/PokedexPage/PokedexPage'
import {DetailsPage} from '../pages/DetailsPage/DetailsPage'

 
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={"/pokedex"} element={<PokedexPage/>}/>
                <Route path={"/detalhes/:name"} element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
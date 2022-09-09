import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from '../components/Pages/HomePage/HomePage'
import {PokedexPage} from '../components/Pages/PokedexPage/PokedexPage'
import {DetailsPage} from '../components/Pages/DetailsPage/DetailsPage'

 
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
import React, {useState} from "react"
import { GlobalContext } from "./GlobalContext"


export function GlobalState({children}) {
    const [pokedexList, setPokedexList] = useState(() => {
        const list = JSON.parse(localStorage.getItem("pokedex"))
        return list || []
    })

    return (
        <GlobalContext.Provider value={{pokedexList, setPokedexList}}>
            {children}
        </GlobalContext.Provider>
    )
}
import React, {useContext, useEffect} from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card, ButtonsCard } from "./style";
import {useNavigate} from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/constants";
import Swal from "sweetalert2";


const PokeCard=({pokemon, buttonCard})=>{
    let [dataPokemon, error, isLoading, reload, setReload] = useRequestData(`${baseUrl}/${pokemon.name}`)
    const {pokedexList, setPokedexList} = useContext(GlobalContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexList))
    }, [pokedexList])

    //Adicionar pokemon à lista da pokedex
    const addPokemon = (poke) => {
        setReload(!reload)
        setPokedexList([...pokedexList, poke])
    }

    //Remover pokemon da lista da pokedex
    const removePokemon = (poke) => {
        setReload(!reload)
        Swal.fire({
            text:`Tem certeza que deseja remover ${poke.name.toUpperCase()} da sua Pokédex?`,
            confirmButtonColor: '#0075BE',
            showDenyButton: true,
            denyButtonText: "Cancelar"
        })
        .then((result) => {
            if(result.isConfirmed) {
                const list = pokedexList.filter(item => {
                    return item.name !== poke.name
                })
                setPokedexList(list)
                Swal.fire('Pokémon removido da Pokédex!', '', 'success')
            } else if(result.isDenied) {
                Swal.fire("Pokémon mantido na Pokédex!")
            }
        })
    }

    return(
        <Card>   
            {!isLoading && dataPokemon && <img src={dataPokemon.sprites.front_default} alt={`Imagem do pokémon ${pokemon.name}`}/>}
            <p><strong>{pokemon.name.toUpperCase()}</strong></p>
            <ButtonsCard>
                <button onClick={()=>{navigate(`/detalhes/${pokemon.name}`)}}>Ver mais</button>
                {buttonCard==="add" && <button onClick={()=>{addPokemon(pokemon)}}>Adicionar</button>}
                {buttonCard==="remove" && <button onClick={()=>{removePokemon(pokemon)}}>Remover</button>}
            </ButtonsCard>
        </Card>
    )
}

export default PokeCard;
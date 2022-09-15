import React, { useContext, useState } from "react";
import { Header } from "../../Header/Header"
import PokeCard from "../../PokeCard/PokeCard";
import { HomeContainer, ButtonsPage, CardsContainer, Loading } from "./style";
import loading from '../../../img/loading.png'
import { GlobalContext } from "../../../context/GlobalContext";
import useRequestData from "../../../hooks/useRequestData";
import { baseUrl } from "../../../constants/constants";
import arrow from '../../../img/arrow.png'
import arrowLeft from '../../../img/arrow-left.png'
import background from '../../../img/background.png'


export function HomePage() {
    const [offset, setOffset] = useState(0)
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}?limit=20&offset=${offset}`)
    const {pokedexList} = useContext(GlobalContext)
    const [buttonCard] = useState("add")
    const [page, setPage] = useState(1)
    
    //Renderizar os pokemóns que não estão na pokedéx
    const pokemons = () => {
        if (pokedexList.length > 0) {
            let filter = dataPokemons.results.filter(pokemon => pokemon.name !== pokedexList[0].name)
            for (let i = 1; i < pokedexList.length; i++) {
                filter = filter.filter(pokemon => pokemon.name !== pokedexList[i].name)
            }
            return filter.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        } else {
            return dataPokemons && dataPokemons.results.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        }
    }

    //Lógica dos botões que ficam na parte inferior da página
    const totalOffset = dataPokemons && (Number(dataPokemons.count) - 20)

    const NextPage = () => {
        setOffset(offset + 20)
        setPage(Number(page) + 1)
    }

    const PreviousPage = () => {
        setOffset(offset - 20)
        setPage(Number(page) - 1)
    }

    const ChoosePage = (e) => {
        e.preventDefault()
        setPage(page)
        setOffset((page - 1) * 20)
    }

    let buttons
    if (offset === 0) {
        buttons = <ButtonsPage>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={65}/>
            </form>
            <img src={arrow} alt={'Imagem de um seta apontando para o lado direito'} onClick={NextPage}/>
                </ButtonsPage>
    } else if (offset > 0 && offset < totalOffset) {
        buttons = <ButtonsPage>
            <img src={arrowLeft} alt={'Imagem de um seta apontando para o lado esquerdo'} onClick={PreviousPage}/>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={65}/>
            </form>
            <img src={arrow} alt={'Imagem de um seta apontando para o lado esquerdo'} onClick={NextPage}/>
        </ButtonsPage>
    } else {
        buttons = <ButtonsPage>
            <img src={arrowLeft} alt={'Imagem de um seta apontando para o lado esquerdo'} onClick={PreviousPage}/>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={65}/>
            </form>
        </ButtonsPage>
    }

    return (
        <HomeContainer background={background}>
            <Header/>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}

            <CardsContainer>
                {!isLoadingPokemons && dataPokemons && pokemons()}
            </CardsContainer>           

            {!isLoadingPokemons && dataPokemons && <>{buttons}</>}

            {!isLoadingPokemons && errorPokemons && <p>Erro: {errorPokemons}</p>}
        </HomeContainer>
    )
}
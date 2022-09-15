import React, { useContext } from "react"
import { Header } from "../../Header/Header"
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../constants/constants";
import useRequestData from '../../../hooks/useRequestData'
import { DetailsContainer, Container, TypesContainer, Loading, TypeList } from "./style";
import loading from '../../../img/loading.png'
import { GlobalContext } from '../../../context/GlobalContext'
import Swal from "sweetalert2";
import background from '../../../img/background.png';


export function DetailsPage() {

    const pathParams = useParams();
    const pokemon = pathParams.name
    const {pokedexList, setPokedexList} = useContext(GlobalContext)
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}/${pokemon}`)
    
    //Lista só com os nomes dos pokémons que estão na pokédex
    let listOfNames = []
    for(let i = 0; i < pokedexList.length; i++) {
        listOfNames.push(pokedexList[i].name)
    }

    //Pegando os detalhes de cada pokémon
    let sum = []
    const listStats = dataPokemons && dataPokemons.stats.map((stat, index) => {
        sum.push(stat.base_stat)
        return (
            <li key={index}><strong><span>{stat.stat.name.toUpperCase()}:</span></strong> {stat.base_stat}</li>
        )
    })
    
    const listTypes = dataPokemons && dataPokemons.types.map((type, index) => {  
        
        let colorBack
        let colorFont
        switch (type.type.name) {
            case 'normal':
                colorBack = '#A8A77A'
                colorFont = '#575501'
                break;
            case 'fire':
                colorBack = '#fa2424'
                colorFont = '#fefbfb'
                break;
            case 'water':
                colorBack = '#6390F0'
                colorFont = '#0134a1'
                break;
            case 'electric':
                colorBack = '#F7D02C'
                colorFont = '#5f4c01'
                break;
            case 'grass':
                colorBack = '#7AC74C'
                colorFont = '#215801'
                break;
            case 'ice':
                colorBack = '#96D9D6'
                colorFont = '#028982'
                break;
            case 'fighting':
                colorBack = '#C22E28'
                colorFont = '#ffffff'
                break;
            case 'poison':
                colorBack = '#A33EA1'
                colorFont = '#ffffff'
                break;
            case 'ground':
                colorBack = '#E2BF65'
                colorFont = '#735302'
                break;
            case 'flying':
                colorBack = '#A98FF3'
                colorFont = '#4000ef'
                break;
            case 'psychic':
                colorBack = '#F95587'
                colorFont = '#7f0228'
                break;
            case 'bug':
                colorBack = '#A6B91A'
                colorFont = '#4f5901'
                break;
            case 'rock':
                colorBack = '#B6A136'
                colorFont = '#5a4b02'
                break;
            case 'ghost':
                colorBack = '#735797'
                colorFont = '#250154'
                break;
            case 'dragon':
                colorBack = '#6F35FC'
                colorFont = '#180151'
                break;
            case 'dark':
                colorBack = '#705746'
                colorFont = '#421b00'
                break;
            case 'steel':
                colorBack = '#B7B7CE'
                colorFont = '#3d3dd7'
                break;
            case 'fairy':
                colorBack = '#D685AD'
                colorFont = '#d61c79'
                break;
            default:
                colorBack = '#000'
                colorFont= '#e7e4e4'
                break;
        }

        return (
            <TypeList background={colorBack} color={colorFont} key={index}> 
                <p> {type.type.name.toUpperCase()} </p>
            </TypeList>
        )
    })


    const listMoves = dataPokemons && dataPokemons.moves.map((move, index) => {
        return (
            <li key={index}>{move.move.name.toUpperCase()}</li>
        )
    })

    //Soma das stats
    const sumStats = sum.reduce((prev, num) => parseInt(prev) + parseInt(num), 0)

    //Adicionar ou remover pokémon da pokedéx
    const addOrRemove = () => {
        if(listOfNames.includes(pokemon)) {
            const remove = pokedexList.filter((item) => {
                return item.name !== pokemon
            })
            Swal.fire({
                title: 'Sucesso!',
                text:`Você removeu o ${pokemon.toUpperCase()} da sua pokédex!`,
                icon: "success",
                confirmButtonColor: '#0075BE'
            })
            return setPokedexList(remove)
        } else {
            const pokedex = [...pokedexList, dataPokemons]
            Swal.fire({
                title: 'Sucesso!',
                text:`Você adicionou o ${pokemon.toUpperCase()} à sua pokédex!`,
                icon: "success",
                confirmButtonColor: '#0075BE'
            })
            return setPokedexList(pokedex)
        }
    }

    return (
        <DetailsContainer background={background}>
            <Header/>            
            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}
            {!isLoadingPokemons && errorPokemons && <p>Ocorreu um erro: {errorPokemons}</p>}
            {!isLoadingPokemons && dataPokemons && (
                <>
                    <TypesContainer>
                        <button onClick={addOrRemove}>{listOfNames.includes(pokemon)? "Remover" : "Adicionar"}</button>
                        <h1>{dataPokemons.name.toUpperCase()}</h1>
                        <ul>{listTypes}</ul>
                    </TypesContainer>
                    <Container>
                        <img src={dataPokemons.sprites.other.home.front_default} alt="Foto do pokémon de frente"/>
                        <div>
                            <h2>Stats</h2>
                            {!isLoadingPokemons && dataPokemons && (
                                <>
                                    <ul>{listStats}</ul>
                                    <hr/>
                                    <p><strong>SOMA:</strong> {sumStats}</p>
                                </>
                            )}
                        </div>    
                        <div>
                            <h2>Principais Ataques</h2>
                            {!isLoadingPokemons && dataPokemons && <ul>{listMoves}</ul>}
                        </div>
                    </Container>
                </>
            )}
        </DetailsContainer>
    )
}
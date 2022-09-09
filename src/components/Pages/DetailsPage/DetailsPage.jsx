import React, { useContext } from "react"
import { Header } from "../../Header/Header"
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../constants/constants";
import useRequestData from '../../../hooks/useRequestData'
import { Container, TypesContainer, Loading, TypeList } from "./style";
import loading from '../../../img/loading.png'
import { GlobalContext } from '../../../context/GlobalContext'
import Swal from "sweetalert2";
import { colours } from "../../../constants/PokemonTypeColors";


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
                colorFont = colours.normal.hex
                colorBack = colours.normal.rgba
                break;
            case 'fire':
                colorFont = colours.fire.hex
                colorBack = colours.fire.rgba
                break;
            case 'water':
                colorFont = colours.water.hex
                colorBack = colours.water.rgba
                break;
            case 'electric':
                colorFont = colours.electric.hex
                colorBack = colours.electric.rgba
                break;
            case 'grass':
                colorFont = colours.grass.hex
                colorBack = colours.grass.rgba
                break;
            case 'ice':
                colorFont = colours.ice.hex
                colorBack = colours.ice.rgba
                break;
            case 'fighting':
                colorFont = colours.fighting.hex
                colorBack = colours.fighting.rgba
                break;
            case 'poison':
                colorFont = colours.poison.hex
                colorBack = colours.poison.rgba
                break;
            case 'ground':
                colorFont = colours.ground.hex
                colorBack = colours.ground.rgba
                break;
            case 'flying':
                colorFont = colours.flying.hex
                colorBack = colours.flying.rgba
                break;
            case 'psychic':
                colorFont = colours.psychic.hex
                colorBack = colours.psychic.rgba
                break;
            case 'bug':
                colorFont = colours.bug.hex
                colorBack = colours.bug.rgba
                break;
            case 'rock':
                colorFont = colours.rock.hex
                colorBack = colours.rock.rgba
                break;
            case 'ghost':
                colorFont = colours.ghost.hex
                colorBack = colours.ghost.rgba
                break;
            case 'dragon':
                colorFont = colours.dragon.hex
                colorBack = colours.dragon.rgba
                break;
            case 'dark':
                colorFont = colours.dark.hex
                colorBack = colours.dark.rgba
                break;
            case 'steel':
                colorFont = colours.steel.hex
                colorBack = colours.steel.rgba
                break;
            case 'fairy':
                colorFont = colours.fairy.hex
                colorBack = colours.fairy.rgba
                break;
            default:
                colorFont = '#000'
                colorBack = '#000'
                break;
        }

        return (
            <TypeList color={colorFont} background={colorBack} key={index}> 
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
        <>
            <Header/>            
            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}
            {!isLoadingPokemons && errorPokemons && <p>Ocorreu um erro: {errorPokemons}</p>}
            {!isLoadingPokemons && dataPokemons && (
                <>
                    <TypesContainer>
                        <button onClick={addOrRemove}>{listOfNames.includes(pokemon)? "Remover da pokédex" : "Adicionar à pokédex"}</button>
                        <h1>{dataPokemons.name.toUpperCase()}</h1>
                        <ul>{listTypes}</ul>
                    </TypesContainer>
                    <Container>
                        <picture>
                            <img src={dataPokemons.sprites.front_default} alt="Foto do pokémon de frente"/>
                            <img src={dataPokemons.sprites.back_default} alt="Foto do pokémon de costas"/>
                        </picture>
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
        </>
    )
}
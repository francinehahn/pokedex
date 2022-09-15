import styled from "styled-components";


export const PokedexContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
`

export const ContainerPokedex= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 8vh;
    }
`

export const Container = styled.section `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3vh 0;
    @media screen and (min-width: 1000px) {
        gap: 1vw;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        gap: 3vw;
    }
    @media screen and (min-width: 525px) and (max-width: 800px) {
        gap: 2vw;
    }
    @media screen and (max-width: 525px) {
        gap: 5vw;
        margin-top: 5vh 0;
    }
`

export const Battle = styled.form `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    margin: 2vh 0 2vh 4.7vw;
    padding: 3vh 0;
    width: 95%;
    select {
        padding: 1vh 1vw;
        border: none;
    }
    img {
        cursor: pointer;
        @media screen and (min-width: 1000px) {
            width: 3.3%;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 5%;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 6%;
        }
        @media screen and (min-width: 500px) and (max-width: 600px) {
            width: 7%;
        }
        @media screen and (max-width: 500px) {
            width: 8%;
        }
        :hover {
            opacity: .8;
        }
    }
`

export const Winner = styled.section `
    background-color: var(--light-blue);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    h2 {
        color: white;
        text-align: center;
        padding-top: 15vh;
    }
    img {
        display: block;
        margin: 2vh auto 0 auto;
        @media screen and (min-width: 1100px) {
            width: 12%;
        }
        @media screen and (min-width: 800px) and (max-width: 1100px) {
            width: 15%;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 20%;
        }
        @media screen and (min-width: 400px) and (max-width: 600px) {
            width: 25%;
        }
        @media screen and (max-width: 400px) {
            width: 30%;
        }
        @keyframes animationPokemon {
            0% {transform: translateY(1.5vw)}
            50% {transform: translateY(-1.5vh)}
            100% {transform: translateY(1.5vw)}
        }
        animation: animationPokemon 4s infinite;
    }
    button {
        display: block;
        padding: 1.5vh 2vw;
        margin: 10vh auto;
    }
`

export const ClearButton = styled.button `
    margin-bottom: 3vh;
`

export const LoadingSection = styled.div `
    background-color: var(--light-blue);
    position: absolute;
    top: 0;
    min-height: 100vh;
    min-width: 100vw;
    img {
        display: block;
        margin: 30vh auto;
        @keyframes rotate {
            from {transform: rotate(0)}
            to {transform: rotate(360deg)}
        }
        
        animation: rotate 1s infinite;
        
        @media screen and (min-width: 1000px) {
            width: 4%;
        }
        @media screen and (min-width: 320px) and (max-width: 1000px) {
            width: 15%;
        }
    }
`

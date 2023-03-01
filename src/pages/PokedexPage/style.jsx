import styled from "styled-components";


export const PokedexContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
`

export const ContainerPokedex= styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 8vh;
    }
`

export const Buttons = styled.div `
    display: flex;
    align-items: center;
    margin-top: 4vh;
    button {
        :nth-child(1) {
            @media screen and (min-width: 1200px) {
                padding: 1.3vh 1vw;
                margin-right: 41vw;
                margin-left: 43vw;                
            }
            @media screen and (min-width: 800px) and (max-width: 1200px) {
                padding: 1.3vh 1vw;
                margin-right: 38vw;
                margin-left: 41vw;                
            }
            @media screen and (min-width: 700px) and (max-width: 800px) {
                padding: 1.3vh 1vw;
                margin-right: 34vw;
                margin-left: 40vw;                
            }
            @media screen and (min-width: 600px) and (max-width: 700px) {
                padding: 1.3vh 1vw;
                margin-right: 33vw;
                margin-left: 38vw;                
            }
            @media screen and (min-width: 530px) and (max-width: 600px) {
                padding: 1.3vh 1vw;
                margin-right: 31vw;
                margin-left: 38vw;                
            }
            @media screen and (min-width: 430px) and (max-width: 530px) {
                padding: 1.3vh 1.2vw;
                margin-right: 26vw;
                margin-left: 35vw;                
            }
            @media screen and (max-width: 430px) {
                padding: 1.3vh 1.2vw;
                margin-right: 25vw;
                margin-left: 32vw;                
            }
        }
        :nth-child(2) {
            @media screen and (min-width: 1200px) {
                padding: 1.3vh 1vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px){
                padding: 1.3vh 1.3vw;
            }
            @media screen and (min-width: 750px) and (max-width: 900px){
                padding: 1.3vh 1.6vw;
            }
            @media screen and (min-width: 600px) and (max-width: 750px){
                padding: 1.3vh 1.8vw;
            }
            @media screen and (min-width: 500px) and (max-width: 600px){
                padding: 1.2vh 2.4vw;
            }
            @media screen and (max-width: 500px){
                padding: 1.1vh 3.2vw;
            }
        }
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
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (min-width: 1200px) {
                margin: 4vh 0 0 2.5vw;
                gap: 1vw;
            }
            @media screen and (min-width: 520px) and (max-width: 1200px) {
                margin: 4vh 0 0 4.3vw;
                gap: 1.5vw;
            }
            @media screen and (max-width: 520px) {
                margin: 4vh 0 0 8vw;
                gap: 2vw;
            }
            select {
                padding: 1vh 1vw;
                border: none;
            }
            span {
                color: white;
            }
            img {
                cursor: pointer;
                @media screen and (min-width: 1000px) {
                    width: 5%;
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
        margin: 22vh 2vw 0 2vw;
        line-height: 4vh;
    }
    img {
        display: block;
        margin: 5vh auto 0 auto;
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
        padding: 1.7vh 2vw;
        margin: 6vh auto;
    }
`

export const LoadingSection = styled.div `
    background-color: var(--light-blue);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    img {
        display: block;
        @keyframes rotate {
            from {transform: rotate(0)}
            to {transform: rotate(360deg)}
        }
        
        animation: rotate 1s infinite;
        
        @media screen and (min-width: 1000px) {
            width: 7%;
            margin: 25vh auto;
        }
        @media screen and (min-width: 320px) and (max-width: 1000px) {
            width: 10%;
            margin: 5vh auto;
        }
    }
`

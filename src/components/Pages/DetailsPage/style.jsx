import styled from "styled-components";

export const DetailsContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
`

export const Container = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 6vw;
    padding-bottom: 5vh;
    @media screen and (min-width: 1000px) {
        gap: 15vw;   
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        gap: 10vw;   
    }
    @media screen and (max-width: 800px) {
        gap: 5vw;   
    }
    img {
        @media screen and (min-width: 850px) {
            width: 20%;
            height: 25%;
        }
        @media screen and (min-width: 500px) and (max-width: 850px) {
            margin-right: 15vw;
            width: 35%;
            height: 40%;
        }
        @media screen and (max-width: 500px) {
            width: 45%;
            height: 50%;
        }
    }
    div {
        h2 {
            margin-top: 2vh;
        }
        :nth-child(1) {
            p:nth-child(1) {
                text-align: center;
            }
        }
        :nth-child(3) {
            ul {
                height: 55vh;
                overflow-y: scroll;
                ::-webkit-scrollbar-track {
                    background-color: #ebe9e9;
                }
                ::-webkit-scrollbar {
                    width: .4vw;
                    background: #ebe9e9;
                }
                ::-webkit-scrollbar-thumb {
                    background: var(--dark-yellow);
                }
            }
        }
    }
`

export const TypesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    @media screen and (min-width: 1000px) {
        margin: 5vh 0;
    }
    @media screen and (max-width: 1000px) {
        margin: 7vh 0 5vh 0;
    }
    ul {
        display: flex;
        gap: 2vw;
        justify-content: center;
    }
    button {
        padding: 1.5vh;
    }
`

export const TypeList = styled.li `
        text-align: center;
        background-color: ${props => props.background};
        color: ${props => props.color};
        padding: .6vh 0;
        border-radius: 5px;

        @media screen and (min-width: 1100px) {
            min-width: 7vw;
        }

        @media screen and (min-width: 900px) and (max-width: 1100px) {
            min-width: 10vw;
        }

        @media screen and (min-width: 526px) and (max-width: 900px){
            min-width: 14vw;
        }

        @media screen and (max-width: 525px){
            min-width: 20vw;
        }
`

export const Loading = styled.img `
    display: block;
    margin: 12vh auto;
    @keyframes rotate {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    
    animation: rotate 1s infinite;
    
    @media screen and (min-width: 1000px) {
        width: 5%;
    }
    @media screen and (min-width: 320px) and (max-width: 1000px) {
        width: 15%;
    }
`
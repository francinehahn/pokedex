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
        @media screen and (min-width: 1300px) {
            width: 15%;
            height: 20%;
            margin-top: 4vh;
        }
        @media screen and (min-width: 850px) and (max-width: 1300px) {
            width: 20%;
            height: 25%;
            margin-top: 5vh;
        }
        @media screen and (min-width: 500px) and (max-width: 850px) {
            margin: 5vh 15vw 0 0;
            width: 30%;
            height: 35%;
        }
        @media screen and (min-width: 420px) and (max-width: 500px) {
            width: 40%;
            height: 45%;
            margin: 6vh 4vw 0 0;
        }
        @media screen and (max-width: 420px) {
            width: 50%;
            height: 55%;
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
        margin: 7vh 0;
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
        font-size: 21px;
        @media screen and (min-width: 1230px) {
            padding: .8vh 1.1vw;   
        }
        @media screen and (min-width: 900px) and (max-width: 1230px) {
            padding: .8vh 1.3vw;   
        }
        @media screen and (min-width: 700px) and (max-width: 900px) {
            padding: .8vh 1.7vw;   
        }
        @media screen and (min-width: 570px) and (max-width: 700px) {
            padding: .8vh 2.2vw;   
        }
        @media screen and (min-width: 490px) and (max-width: 570px) {
            padding: .7vh 2.5vw;   
        }
        @media screen and (max-width: 490px) {
            padding: .6vh 2.8vw;   
        }
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
    margin: 26vh auto;
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
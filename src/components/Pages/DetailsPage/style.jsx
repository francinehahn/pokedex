import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15vw;
    margin: 0 6vw;
    padding-bottom: 5vh;
    picture {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
    div {
        :nth-child(1) {
            p:nth-child(1) {
                text-align: center;
            }
        }
        :nth-child(3) {
            ul {
                height: 60vh;
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
    margin: 5vh 4vw;
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
        background-color: ${(props) => props.background};
        color: ${(props) => props.color};
        opacity: 85%;
        border: 1px solid ${(props) => props.color};
        padding: .5vw;

        @media screen and (min-width: 1100px) {
            min-width: 8vw;
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
import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    text-align: center;
    img {
        margin-bottom: 1vw;
    }

    @media screen and (min-width: 1200px) {
        min-width: 15vw;
        max-width: 30vw;
        min-height: 33vh;
        max-height: 38vh;
        img {
            min-width: 5vw;
        }  
    }

    @media screen and (min-width: 1000px) and (max-width: 1200px){
        min-width: 20vw;
        max-width: 25vw;
        min-height: 32vh;
        max-height: 36vh;
        img {
            min-width: 5vw;
        }  
    }
    
    @media screen and (min-width: 800px) and (max-width: 1000px){
        min-width: 25vw;
        max-width: 30vw;
        min-height: 29vh;
        max-height: 32vh;
        img {
            min-width: 5vw;
        }  
    }

    @media screen and (min-width: 650px) and (max-width: 800px){
        width: 30vw;
        height: 32vh;
        img {
            min-width: 16vw;
            max-width: 20vw;
        }
    }
    
    @media screen and (min-width: 525px) and (max-width: 650px){
        width: 30vw;
        height: 28vh;
        img {
            min-width: 16vw;
            max-width: 20vw;
        }
    }

    @media screen and (min-width: 450px) and (max-width: 525px){
        width: 42vw;
        height: 30vh;
        img {
            min-width: 23vw;
            max-width: 28vw;
        }
    }
    @media screen and (max-width: 450px){
        width: 42vw;
        height: 25vh;
        img {
            min-width: 23vw;
            max-width: 28vw;
        }
    }
`

export const ButtonsCard = styled.div`
    display: flex;
    gap: 1.3vw;
    margin-top: 0.5vw;
    @media screen and (max-width: 525px){
        margin-bottom: 2vh;
    }
`
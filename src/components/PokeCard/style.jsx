import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #65aee246;
    text-align: center;
    box-shadow: 4px 4px 4px #0002031a;
    p {
        margin-bottom: 1vh;
    }

    @media screen and (min-width: 1200px) {
        min-width: 10vw;
        max-width: 18vw;
        min-height: 35vh;
        max-height: 42vh;
        img {
            margin-bottom: 1vw;
            width: 45%;
        }
    }

    @media screen and (min-width: 1000px) and (max-width: 1200px){
        min-width: 15vw;
        max-width: 20vw;
        min-height: 32vh;
        max-height: 36vh;
        img {
            margin-bottom: 1vw;
            width: 40%;
        }
    }
    
    @media screen and (min-width: 800px) and (max-width: 1000px){
        min-width: 20vw;
        max-width: 25vw;
        min-height: 29vh;
        max-height: 32vh;
        img {
            margin-bottom: 1vw;
            width: 40%;
        }
    }

    @media screen and (min-width: 650px) and (max-width: 800px){
        width: 30vw;
        height: 32vh;
        img {
            margin-bottom: 1vw;
            width: 45%;
        }
    }
    
    @media screen and (min-width: 525px) and (max-width: 650px){
        width: 30vw;
        height: 28vh;
        img {
            margin-bottom: 1vw;
            width: 55%;
        }
    }

    @media screen and (min-width: 450px) and (max-width: 525px){
        width: 42vw;
        height: 33vh;
        img {
            margin-bottom: 1vw;
            width: 62%;
        }
    }
    @media screen and (max-width: 450px){
        width: 42vw;
        height: 30vh;
        img {
            margin-bottom: 1vw;
            width: 65%;
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
    button {
        @media screen and (min-width: 900px) {
            padding: 1.3vh 1vw;            
        }
        @media screen and (min-width: 530px) and (max-width: 900px) {
            padding: 1.3vh 1.3vw;            
        }
        @media screen and (max-width: 530px) {
            padding: 1.1vh 1.5vw;            
        }
    }
`
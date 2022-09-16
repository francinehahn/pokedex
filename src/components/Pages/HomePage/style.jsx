import styled from "styled-components";

export const HomeContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
`

export const CardsContainer = styled.section`
    margin: 5vh 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
    }
`

export const ButtonsPage = styled.div`
    display: flex;
    padding: 1vh 0 4vh 0;
    gap: 10px;
    justify-content: center;
    align-items: center;

    form > input {
        width: 40px;
        padding: .6vh 0 .6vh .8vw;
        border: 1px solid var(--dark-yellow);
    }

    img {
        cursor: pointer;
        @media screen and (min-width: 1000px) {
            width: 2%;
        }
        @media screen and (min-width: 700px) and (max-width: 1000px) {
            width: 3%;
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            width: 4%;
        }
        @media screen and (max-width: 500px) {
            width: 6%;
        }
        :hover {
            opacity: .8;
        }
    }
`

export const Loading = styled.img `
    display: block;
    @keyframes rotate {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    
    animation: rotate 1s infinite;
    
    @media screen and (min-width: 900px) {
        width: 5%;
        margin: 28vh auto;
    }
    @media screen and (min-width: 320px) and (max-width: 900px) {
        width: 13%;
        margin: 35vh auto;
    }
`
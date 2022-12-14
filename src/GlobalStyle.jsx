import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

    :root {
        --light-blue: #0075BE;
        --dark-yellow: #D5A100;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.main `
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    p, li, select {
        line-height: 4vh;
        @media screen and (min-width: 500px) {
            font-size: 16px;
        }
        @media screen and (max-width: 500px) {
            font-size: 14px;
        }
    }
    ul {
        list-style: none;
    }
    h1 {
        line-height: 6vh;
        @media screen and (min-width: 1024px) {
            font-size: 28px;
        }
        @media screen and (min-width: 800px) and (max-width: 1024px) {
            font-size: 26px;
        }
        @media screen and (min-width: 525px) and (max-width: 800px) {
            font-size: 24px;
        }
        @media screen and (max-width: 525px){
            font-size: 21px;
        }
    }
    h2 {
        line-height: 6vh;
        @media screen and (min-width: 1024px) {
            font-size: 26px;
        }
        @media screen and (min-width: 800px) and (max-width: 1024px) {
            font-size: 24px;
        }
        @media screen and (min-width: 525px) and (max-width: 800px) {
            font-size: 21px;
        }
        @media screen and (max-width: 525px){
            font-size: 18px;
        }
    }

    button {
        cursor: pointer;
        color: white;
        background-color: var(--dark-yellow);
        border-radius: 5px;
        border: none;
        :hover {
            opacity: .8;
        }
    }
`
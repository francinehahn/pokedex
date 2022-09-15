import styled from "styled-components";

export const HeaderSection = styled.header `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5vh 8vw 0 0;
    margin-bottom: 5vh;
    @media screen and (min-width: 600px) {
        height: 10vh;
    }
    @media screen and (max-width: 600px) {
        height: 8vh;
    }
    div {
        display: flex;
        align-items: center;
        gap: 1vw;
        h1 {
            color: white;
        }
        img {
            margin-left: 4vw;
            @media screen and (min-width: 800px){
                width: 8%;
                margin-left: 6vw;
            }
            @media screen and (min-width: 525px) and (max-width: 800px){
                width: 10%;
                margin-left: 4vw;
            }
            @media screen and (max-width: 525px){
                width: 15%;
                margin-left: 4vw;
            }
        }
    }
    nav {
        display: flex;
        gap: 3vw;
        a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            :hover {
                color: var(--dark-yellow);
            }
        }
    }

`
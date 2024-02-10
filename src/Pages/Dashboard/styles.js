import styled from "styled-components";

export const Main = styled.div`

`

export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8rem;
    background-color: white;
    border-radius: 50px;
    padding: 0 5rem;

    & > img {
        height: 70px;
        width: 70px;
        cursor: pointer;
    }

    & > img:hover {
    scale: 1.1;
    transition: 0.5s;  
    }
    
`

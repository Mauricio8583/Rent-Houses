import styled from "styled-components";

export const NavbarContainer = styled.div`
     display: flex;
     justify-content: center;
     background-color: #294492;
     color: #FFF;

`

export const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;


`

export const Logo = styled.div`
    font-size: 34px;
    font-weight: bold;

`

export const Links = styled.div`
     display: flex;
     align-items: center;
     gap: 24px;
     font-weight: 500;

`

export const Text = styled.span`


`

export const TextLinks = styled.span`


`

export const ButtonLinks = styled.button`
    background-color: transparent;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;

    &:hover{
        background-color: #020B44;
        border-color: #020B44;
    }

`
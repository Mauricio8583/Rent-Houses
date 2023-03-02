import styled from "styled-components";

export const NavbarContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: ${ (props) => props.active ? 'white' : '#294492' };
     color: ${ (props) => props.active ? '#000' : '#FFF' };;
     transition: 0.5s all ease;
     position: sticky;
     top: 0;

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
    color: ${(props) => props.active ? 'black' : 'white'};
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;

    &:hover{
        background-color: ${(props) => props.active ? '' : '#020B44'};
        border-color: #020B44;
    }

`

export const Menu = styled.div`
    width: 1400px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    font-weight: 300;
    color: #FFF;  

`
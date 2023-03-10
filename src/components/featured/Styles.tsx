import styled from "styled-components";

export const Container = styled.div`
    height: 600px;
    display: flex;
    justify-content: center;
    background-color: #294492;
    color: #FFF;    

`

export const FeaturedContainer = styled.div`
     width: 1400px;
     display: flex;
     align-items: center;

`

export const Left = styled.div`
     display: flex;
     flex-direction: column;
     gap: 30px;

`

export const Right = styled.div`
     height: 100%;
     

`

export const MainTitle = styled.h1`
     font-size: 50px;


`

export const Seacrh = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: #FFF;
     border-radius: 5px;

`

export const SeacrhInput = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;


`

export const SeacrhImg = styled.img`
    width: 20px;
    height: 20px;
    margin: 10px;

`

export const Input = styled.input`
    border: none;
    outline: none;

`

export const SeacrhButton = styled.button`
    width: 120px;
    height: 50px;
    border: none;
    background-color: #1dbf73;
    color: #000;
    cursor: pointer;

`

export const Cities = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

`

export const CitiesText = styled.span`


`

export const CitiesButton = styled.button`
     color: #FFF;
     background-color: transparent;
     border: 1px solid #FFF;
     padding: 5px 10px;
     border-radius: 20px;
     font-size: 14px;
     cursor: pointer;

`

export const LogoImg = styled.img`
    width: 700px;
    height: 100%;
    object-fit: contain;
    margin: 0 70px;
    border-radius: 20%;    
`
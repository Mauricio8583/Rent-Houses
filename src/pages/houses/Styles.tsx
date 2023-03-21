import styled from "styled-components";

export const HousesContainer = styled.div`
    display: flex;
    justify-content: center;

`

export const Container = styled.div`
    width: 1400px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;

`

export const BreadCrumb = styled.span`
    font-weight: 300;
    font-size: 18px;
    color: #555;

`

export const Title = styled.h1`


`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const MenuLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #555;
    font-weight: 300;

`

export const MenuRight = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

`

export const Budget = styled.span`


`

export const BudgetInput = styled.input`
     padding: 5px;
     border: 1px solid lightgrey;
     outline: none;

     &::placeholder{
        color: lightgrey;
     }

`

export const BudgetButton = styled.button`
     background-color: #1dbf73;
     color: #FFF;
     font-weight: 500;
     border: none;
     cursor: pointer;
     padding: 5px 10px;
     border-radius: 5px;

`

export const SortBy = styled.span`
     color: #555;
     font-weight: 300;

`

export const SortType = styled.span`
     font-weight: 500;

`

export const DownImg = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

`

export const SortMenu = styled.div`
    padding: 20px;
    background-color: #FFF;
    border-radius: 5px;
    border: .5px solid lightgrey;
    position: absolute;
    top: 30px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #555;

`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
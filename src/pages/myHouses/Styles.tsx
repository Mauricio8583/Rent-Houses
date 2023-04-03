import styled from "styled-components";

export const MyHouseContainer = styled.div`
     display: flex;
     justify-content: center;


`

export const Container = styled.div`
     width: 1400px;
     padding: 50px 0;

`

export const Title = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;

`

export const AddButton = styled.button`
     background-color: #1dbf73;
     color: #FFF;
     font-weight: 500;
     border: none;
     padding: 10px;
     cursor: pointer;

`

export const TitleName = styled.h1`


`

export const HouseTable = styled.table`
     width: 100%;

`

export const HouseTableTr = styled.tr`
     height: 50px;

     &:nth-child(even){
        background-color: #1dbf730f;
     }

`

export const HouseTableTh = styled.th`
     text-align: left;
 
`

export const HouseTableTd = styled.td`


`

export const HouseImg = styled.img`
     width: 50px;
     height: 25px;
     object-fit: cover;

`

export const DeleteImg = styled.img`
     width: 20px;
     cursor: pointer;

`
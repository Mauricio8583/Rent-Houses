import styled from "styled-components";

export const MessageContainer = styled.div`
     display: flex;
     justify-content: center;

`

export const Container = styled.div`
     width: 1200px;
     margin: 50px;

`

export const BreadCrumbs = styled.span`
     font-weight: 300;
     font-size: 13px;
     color: #555;

`

export const MessagesBox = styled.div`
     margin: 30px 0;
     padding: 50px;
     display: flex;
     flex-direction: column;
     gap: 20px;
     height: 500px;
     overflow-y: scroll;

`

export const Write = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const WriteArea = styled.textarea`
    width: 80%;
    height: 100px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 18px;

`

export const SendMessageButton = styled.button`
    background-color: #1dbf73;
    padding: 20px;
    color: #FFF;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    cursor: pointer;

`

export const Item = styled.div`
    display: flex;
    gap: 20px;
    max-width: 600px;
    font-size: 18px;

`

export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;

`

export const UserMessage = styled.p`
    padding: 20px;
    background-color: lightgrey;
    border-radius: 0 20px 20px 20px;

`

export const ItemOwner = styled.div`
    display: flex;
    gap: 20px;
    max-width: 600px;
    font-size: 18px;
    flex-direction: row-reverse;
    align-self: flex-end;

`

export const UserMessageOwner = styled.p`
    padding: 20px;
    background-color: lightblue;
    border-radius: 20px 0 20px 20px;

`

export const Line = styled.hr`
    height: 0;
    border: 0.5px solid lightgray;
    margin-bottom: 20px;

`
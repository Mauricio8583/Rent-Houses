import { Link } from "react-router-dom"
import { BreadCrumbs, Container, Item, ItemOwner, Line, MessageContainer, MessagesBox, SendMessageButton, UserImg, UserMessage,UserMessageOwner, Write, WriteArea } from "./Styles"

export const Message = () => {
  return (
    <MessageContainer>
        <Container>
          <BreadCrumbs><Link to="/messages">Mensagens</Link> - Jonh Doe</BreadCrumbs>
          <MessagesBox>
            <Item>
              <UserImg src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
              <UserMessage>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a quas nostrum corporis, 
                numquam, quod magni eum necessitatibus iusto vero veniam debitis suscipit velit recusandae ratione 
                soluta nulla sed aspernatur.
              </UserMessage>
            </Item>
            <ItemOwner>
            <UserImg src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
              <UserMessageOwner>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a quas nostrum corporis, 
                numquam, quod magni eum necessitatibus iusto vero veniam debitis suscipit velit recusandae ratione 
                soluta nulla sed aspernatur.
              </UserMessageOwner>
            </ItemOwner>
            <Item>
              <UserImg src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
              <UserMessage>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a quas nostrum corporis, 
                numquam, quod magni eum necessitatibus iusto vero veniam debitis suscipit velit recusandae ratione 
                soluta nulla sed aspernatur.
              </UserMessage>
            </Item>
            <ItemOwner>
            <UserImg src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />
              <UserMessageOwner>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a quas nostrum corporis, 
                numquam, quod magni eum necessitatibus iusto vero veniam debitis suscipit velit recusandae ratione 
                soluta nulla sed aspernatur.
              </UserMessageOwner>
            </ItemOwner>
          </MessagesBox>
          <Line />
          <Write>
            <WriteArea rows="10" cols="30"placeholder="escreva uma mensagem" ></WriteArea>
            <SendMessageButton>Enviar</SendMessageButton>
          </Write>
        </Container>
    </MessageContainer>
  )
}

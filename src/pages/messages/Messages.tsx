import { AddButton, Container, MailImg, HouseImg, ReadButton, HouseTable, HouseTableTd, HouseTableTh, HouseTableTr, MessagesContainer, Title, TitleName } from "./Styles"
import {Link} from "react-router-dom"

export const Messages = () => {
  return (
    <MessagesContainer>
        <Container>
          <Title>
            <TitleName>Ofertas</TitleName>            
          </Title>
          <HouseTable>
            <HouseTableTr>
              <HouseTableTh>Nome</HouseTableTh>
              <HouseTableTh>Última Mensagem</HouseTableTh>
              <HouseTableTh>Data</HouseTableTh>
              <HouseTableTh>Ação</HouseTableTh>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd>Jonh Doe</HouseTableTd>
              <HouseTableTd><Link to="/message/123" style={{textDecoration: 'none', color: "#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat, quo totam vitae voluptate optio eius dignissimos</Link></HouseTableTd>
              <HouseTableTd>1 dia atrás</HouseTableTd>
              <HouseTableTd><ReadButton>Marcar como lida</ReadButton></HouseTableTd>              
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd>Jonh Doe</HouseTableTd>
              <HouseTableTd><Link to="/message/123" style={{textDecoration: 'none', color: "#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat, quo totam vitae voluptate optio eius dignissimos</Link></HouseTableTd>
              <HouseTableTd>1 dia atrás</HouseTableTd>
              <HouseTableTd><ReadButton>Marcar como lida</ReadButton></HouseTableTd>              
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd>Jonh Doe</HouseTableTd>
              <HouseTableTd><Link to="/message/123" style={{textDecoration: 'none', color: "#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat, quo totam vitae voluptate optio eius dignissimos</Link></HouseTableTd>
              <HouseTableTd>1 dia atrás</HouseTableTd>
              <HouseTableTd><ReadButton>Marcar como lida</ReadButton></HouseTableTd>              
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd>Jonh Doe</HouseTableTd>
              <HouseTableTd><Link to="/message/123" style={{textDecoration: 'none', color: "#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat, quo totam vitae voluptate optio eius dignissimos</Link></HouseTableTd>
              <HouseTableTd>1 dia atrás</HouseTableTd>
              <HouseTableTd><ReadButton>Marcar como lida</ReadButton></HouseTableTd>              
            </HouseTableTr>
            
          </HouseTable>
        </Container>
    </MessagesContainer>
  )
}

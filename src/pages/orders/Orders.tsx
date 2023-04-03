import { AddButton, Container, MailImg, HouseImg, HouseTable, HouseTableTd, HouseTableTh, HouseTableTr, OrdersContainer, Title, TitleName } from "./Styles"
import {Link} from "react-router-dom"

export const Orders = () => {

 return (
    <OrdersContainer>
        <Container>
          <Title>
            <TitleName>Ofertas</TitleName>
            <Link to="/add"><AddButton>Add Nova Casa</AddButton></Link>
          </Title>
          <HouseTable>
            <HouseTableTr>
              <HouseTableTh>Imagem</HouseTableTh>
              <HouseTableTh>Titulo</HouseTableTh>
              <HouseTableTh>Preço</HouseTableTh>
              <HouseTableTh>Valor de Oferta</HouseTableTh>
              <HouseTableTh>Chat</HouseTableTh>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>80000</HouseTableTd>
              <HouseTableTd><MailImg src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/icon-email.png/@@images/2272be23-02eb-43ca-9fad-f6fa02970ba3.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>80000</HouseTableTd>
              <HouseTableTd><MailImg src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/icon-email.png/@@images/2272be23-02eb-43ca-9fad-f6fa02970ba3.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>80000</HouseTableTd>
              <HouseTableTd><MailImg src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/icon-email.png/@@images/2272be23-02eb-43ca-9fad-f6fa02970ba3.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>80000</HouseTableTd>
              <HouseTableTd><MailImg src="https://portal.ifba.edu.br/barreiras/imagens-campus-barreiras/icon-email.png/@@images/2272be23-02eb-43ca-9fad-f6fa02970ba3.png" alt="" /></HouseTableTd>
            </HouseTableTr>
          </HouseTable>
        </Container>
    </OrdersContainer>
  )
}

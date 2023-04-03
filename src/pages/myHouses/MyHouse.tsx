import { Link } from "react-router-dom"
import { AddButton, Container, DeleteImg, HouseImg, HouseTable, HouseTableTd, HouseTableTh, HouseTableTr, MyHouseContainer, Title, TitleName } from "./Styles"

export const MyHouse = () => {
  return (
    <MyHouseContainer>
        <Container>
          <Title>
            <TitleName>Casas</TitleName>
            <Link to="/add"><AddButton>Add Nova Casa</AddButton></Link>
          </Title>
          <HouseTable>
            <HouseTableTr>
              <HouseTableTh>Imagem</HouseTableTh>
              <HouseTableTh>Titulo</HouseTableTh>
              <HouseTableTh>Preço</HouseTableTh>
              <HouseTableTh>Ofertas</HouseTableTh>
              <HouseTableTh>Ação</HouseTableTh>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>6</HouseTableTd>
              <HouseTableTd><DeleteImg src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>6</HouseTableTd>
              <HouseTableTd><DeleteImg src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>6</HouseTableTd>
              <HouseTableTd><DeleteImg src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png" alt="" /></HouseTableTd>
            </HouseTableTr>
            <HouseTableTr>
              <HouseTableTd><HouseImg src="https://images.adsttc.com/media/images/613f/df13/8580/2b01/6405/340e/newsletter/whatsapp-image-2021-02-09-at-10-9.jpg?1631575834" alt="" /></HouseTableTd>
              <HouseTableTd>Casa 1</HouseTableTd>
              <HouseTableTd>125000</HouseTableTd>
              <HouseTableTd>6</HouseTableTd>
              <HouseTableTd><DeleteImg src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png" alt="" /></HouseTableTd>
            </HouseTableTr>
          </HouseTable>
        </Container>
    </MyHouseContainer>
  )
}

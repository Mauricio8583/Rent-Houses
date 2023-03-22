import { Slider } from "./Slider"
import { houseImgs } from "../../data"
import {BreadCrumb, Container, Desc, HouseContainer, HouseStars, Left, ProfilePic, Right, StarImg, StarNumber, User, UserName } from "./Styles"

export const House = () => {
  return (
    <HouseContainer>
        <Container>
          <Left>
            <BreadCrumb>Cidades -- Porto Alegre</BreadCrumb>
            <Desc>Descrição da Casa</Desc>

            <User>
              <ProfilePic />
              <UserName>Jonh Doe</UserName>
              <HouseStars>
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarNumber>5</StarNumber>                
              </HouseStars>
            </User>
            <Slider houses={houseImgs} />
          </Left>
          <Right>

          </Right>
        </Container>
    </HouseContainer>
  )
}

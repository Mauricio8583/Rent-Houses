import { Link } from "react-router-dom";
import { CityCardContainer, CityImg, CityName, Container, Title } from "./Styles"


export const CityCard = ({item}) => {
  return (
    <CityCardContainer>
        <Link to="/houses?city=Poa">
        <Container>
            <CityImg src={item.img} alt="" />
            <CityName>{item.city}</CityName>
            <Title>{item.title}</Title>
        </Container>
        </Link>
    </CityCardContainer>
  )
}

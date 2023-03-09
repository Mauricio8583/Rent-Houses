import { Link } from "react-router-dom";
import { CityCardContainer, CityImg, CityName, Container, Title } from "./Styles"

interface ICity{
    id: number;
    title: string;
    city: string;
    img: string;
}

export const CityCard = (item: ICity) => {
  return (
    <CityCardContainer>
        <Link to="/houses?city=Poa">
        <Container>
            <CityImg src={item.img} alt="" />
            <Title>{item.title}</Title>
            <CityName>{item.city}</CityName>
        </Container>
        </Link>
    </CityCardContainer>
  )
}

import {Container, SlideContainer, Wrapper } from "./Styles"
import { cards } from "../../data";
import { CityCard } from "../cityCard/CityCard";



export const Slide = () => {

  return (
    <SlideContainer>
        <Container>
          
          <Wrapper>
            {cards.map((card) => (
              <CityCard item={card} key={card.id} />
            ))}
          </Wrapper>

          
            
        </Container>
    </SlideContainer>
  )
}

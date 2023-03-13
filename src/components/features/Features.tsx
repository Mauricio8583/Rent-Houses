import { AnoucementVideo, Container, FeaturesContainer, Info, Item, MainTitle, Title } from "./Styles"

export const Features = () => {
  return (
    <FeaturesContainer>
        <Container>
            <Item>
                <MainTitle>Encontre opções de aluguel no litoral gaucho</MainTitle>
                <Title>
                    O melhor para cada bolso
                </Title>
                <Info>
                    Encontre as melhores casas com os melhores preços
                </Info>
                <Title>
                    O melhor para cada bolso
                </Title>
                <Info>
                    Encontre as melhores casas com os melhores preços
                </Info>
                <Title>
                    O melhor para cada bolso
                </Title>
                <Info>
                    Encontre as melhores casas com os melhores preços
                </Info>
                <Title>
                    O melhor para cada bolso
                </Title>
                <Info>
                    Encontre as melhores casas com os melhores preços
                </Info>
            </Item>
            <Item>
                <AnoucementVideo src="https://youtu.be/Ynr4o0eOjdg" controls />
            </Item>
        </Container>
    </FeaturesContainer>
  )
}

import { Cities, CitiesButton, CitiesText, Container, FeaturedContainer, Input, Left, LogoImg, MainTitle, Right, Seacrh, SeacrhButton, SeacrhImg, SeacrhInput } from './Styles'

export const Featured = () => {
  return (
    <Container>
        <FeaturedContainer>
            <Left>
                <MainTitle>Encontre a melhor casa para alugar</MainTitle>
                <Seacrh>
                    <SeacrhInput>
                        <SeacrhImg src='https://cdn-icons-png.flaticon.com/512/3917/3917754.png' alt='search' />
                        <Input type="text" placeholder='Buscar...' />
                    </SeacrhInput>
                    <SeacrhButton>Buscar</SeacrhButton>
                </Seacrh>
                <Cities>
                    <CitiesText>Cidades:</CitiesText>
                    <CitiesButton>Porto Alegre</CitiesButton>
                    <CitiesButton>Capão da Canoa</CitiesButton>
                    <CitiesButton>Tramandaí</CitiesButton>
                    <CitiesButton>Imbé</CitiesButton>
                </Cities>
            </Left>
            <Right>
                <LogoImg src='https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80' alt='house' />
            </Right>
        </FeaturedContainer>
    </Container>
  )
}

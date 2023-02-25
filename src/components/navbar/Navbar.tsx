import { Link } from "react-router-dom"
import { ButtonLinks, Container, Links, Logo, NavbarContainer, Text, TextLinks } from "./Styles"

export const Navbar = () => {
  return (
    <NavbarContainer>
        <Container>
            <Logo>
                <Link to="/">
                 <Text>Rent Houses</Text>       
                </Link>
            </Logo>
            <Links>
             <TextLinks>Business</TextLinks>  
             <TextLinks>Explorar</TextLinks>
             <TextLinks>Sign in</TextLinks>
             <TextLinks>Become a Seller</TextLinks>
             <ButtonLinks>Join</ButtonLinks>                
            </Links>
        </Container>
    </NavbarContainer>
  )
}

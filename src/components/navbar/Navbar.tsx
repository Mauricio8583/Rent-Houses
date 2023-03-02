import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ButtonLinks, Container, Links, Logo, Menu, NavbarContainer, Text, TextLinks } from "./Styles"

interface IActive {
  isActive: boolean
}

export const Navbar = () => {

  const [isActive, setIsActive] = useState<IActive>({isActive: false});

  const activeByScrolling = () => {
    window.scrollY > 0 ? setIsActive({isActive: true}) : setIsActive({isActive: false}); 
  }

  useEffect(() => {
    window.addEventListener('scroll', activeByScrolling);

    return () => {
      window.removeEventListener('scroll', activeByScrolling);
    }

  }, [])

  return (
    <NavbarContainer active={isActive.isActive}>
        <Container>
            <Logo>
                
                 <Text>Rent Houses</Text>       
                
            </Logo>
            <Links>
             <TextLinks>Business</TextLinks>  
             <TextLinks>Explorar</TextLinks>
             <TextLinks>Sign in</TextLinks>
             <TextLinks>Become a Seller</TextLinks>
             <ButtonLinks active={isActive.isActive}>Join</ButtonLinks>                
            </Links>            
        </Container>
        {isActive.isActive && (
          <Menu>
          <span>Test</span>
          <span>Test 2</span>              
          </Menu>
        )}
    </NavbarContainer>
  )
}

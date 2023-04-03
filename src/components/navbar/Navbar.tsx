import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ButtonLinks, Container, Links, Logo, Menu, MenuSpan, NavbarContainer, Options, OptionsSpan, Text, TextLinks, User, Username, UserProfilePic } from "./Styles"

interface IUser {
  id: Number,
  username: String,
  isSeller: boolean
}

export const Navbar = () => {

  const [isActive, setIsActive] = useState<Boolean>(false);
  const [open, setOpen] = useState<Boolean>(false);

  const {pathname} = useLocation();
  

  const activeByScrolling = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false); 
  }

  const currentUser: IUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  }

  useEffect(() => {
    window.addEventListener('scroll', activeByScrolling);

    if(pathname !=='/') setIsActive(true)

    return () => {
      window.removeEventListener('scroll', activeByScrolling);
    }

  }, [])

  return (
    <NavbarContainer active={isActive}>
        <Container>
            <Logo>
                
                 <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                  <Text>Rent Houses</Text>                  
                 </Link>       
                
            </Logo>
            <Links>
             <TextLinks>Business</TextLinks>  
             <TextLinks>Explorar</TextLinks>
             <TextLinks>Sign in</TextLinks>
             {currentUser?.isSeller && <TextLinks>Become a Seller</TextLinks>}
             {!currentUser && <ButtonLinks active={isActive}>Join</ButtonLinks>}
             {currentUser && (
              <User onClick={() => setOpen(!open)}>
                <UserProfilePic src="http://etc.usf.edu/presentations/extras/letters/fridge_magnets/red/11/a-300.png" alt="profilepic" />
                <Username>{currentUser?.username}</Username>
                {open && <Options>
                  {currentUser?.isSeller && (
                    <>
                    <Link to="/myhouses" style={{textDecoration: 'none', color: 'inherit'}}>
                      <OptionsSpan>Casas</OptionsSpan>
                    </Link>
                    <Link to="/add" style={{textDecoration: 'none', color: 'inherit'}}>
                      <OptionsSpan>Adicionar Nova Casa</OptionsSpan>
                    </Link>                    
                    </>
                  )}
                  <Link to="/orders" style={{textDecoration: 'none', color: 'inherit'}}>
                    <OptionsSpan>Pedidos</OptionsSpan>
                  </Link>
                  <Link to="/messages" style={{textDecoration: 'none', color: 'inherit'}}>
                  <OptionsSpan>Mensagens</OptionsSpan>
                  </Link>
                  <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <OptionsSpan>Logout</OptionsSpan>
                  </Link>
                  
                 </Options>}
              </User>
             )}                
            </Links>            
        </Container>        
    </NavbarContainer>
  )
}

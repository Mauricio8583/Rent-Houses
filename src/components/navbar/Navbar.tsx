import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ButtonLinks, Container, Links, Logo, Menu, NavbarContainer, Options, OptionsSpan, Text, TextLinks, User, Username, UserProfilePic } from "./Styles"

interface IActive {
  isActive: boolean
}

interface IUser {
  id: Number,
  username: String,
  isSeller: boolean
}

interface IOpenMenu {
  isOpen: boolean
}

export const Navbar = () => {

  const [isActive, setIsActive] = useState<IActive>({isActive: false});
  const [open, setOpen] = useState<IOpenMenu>({isOpen: false});

  const activeByScrolling = () => {
    window.scrollY > 0 ? setIsActive({isActive: true}) : setIsActive({isActive: false}); 
  }

  const currentUser: IUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
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
             {currentUser?.isSeller && <TextLinks>Become a Seller</TextLinks>}
             {!currentUser && <ButtonLinks active={isActive.isActive}>Join</ButtonLinks>}
             {currentUser && (
              <User onClick={() => setOpen({isOpen: !open.isOpen})}>
                <UserProfilePic src="http://etc.usf.edu/presentations/extras/letters/fridge_magnets/red/11/a-300.png" alt="profilepic" />
                <Username>{currentUser?.username}</Username>
                {open.isOpen && <Options>
                  {currentUser?.isSeller && (
                    <>
                    <OptionsSpan>Gigs</OptionsSpan>
                    <OptionsSpan>Add New Gigs</OptionsSpan>                    
                    </>
                  )}
                  <OptionsSpan>Orders</OptionsSpan>
                  <OptionsSpan>Messages</OptionsSpan>
                  <OptionsSpan>Logout</OptionsSpan>
                  
                 </Options>}
              </User>
             )}                
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

import { Link } from "react-router-dom"
import { CoastSpan, Desc, Details, GigCardContainer, GigImg, HeartImg, Info, Line, Price, PriceContainer, Star, StarImg, StarRate, User, Username, UserPic } from "./Styles"

export const GigCard = ({item}) => {
  return (
    <Link to="/house/123">
        <GigCardContainer>
            <GigImg src={item.img} alt="" />
            <Info>
                <User>
                    <UserPic src={item.profilePic} alt="" />
                    <Username>{item.username}</Username>
                </User>
                <Desc>{item.desc}</Desc>
                <Star>
                    <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                    <StarRate>{item.star}</StarRate>
                </Star>
            </Info>  
            <Line />
            <Details>
             <HeartImg src="https://t4.ftcdn.net/jpg/00/96/48/45/360_F_96484587_7lWZQz2UQKWLfiT0CMOyCnQ7OcwSmDzj.jpg" alt="" />
             <PriceContainer>
               <CoastSpan>Preço:</CoastSpan>
               <Price>{item.price}</Price>
             </PriceContainer>
            </Details>      
        </GigCardContainer>
    
    </Link>
  )
}

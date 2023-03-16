import { Link } from "react-router-dom"
import { Desc, Details, GigCardContainer, GigImg, Info, Star, StarImg, StarRate, User, Username, UserPic } from "./Styles"

export const GigCard = (item) => {
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
            <Details>
            
            </Details>      
        </GigCardContainer>
    
    </Link>
  )
}

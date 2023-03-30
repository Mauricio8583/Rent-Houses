import { Slider } from "./Slider"
import { houseImgs } from "../../data"
import {AboutHouse, AboutHouseContent, BreadCrumb, CheckImg, CheckInfo, Comment, Container, Country, CountryImg, CountryName, Desc, Detail, DetailButton, DetailItem, Helpful, HelpfulIcon, HelpfulOption, HelpfulTitle, HouseContainer, HousePrice, HouseStars, HouseTitle, Item, ItemDesc, ItemTitle, ItensParagraph, Left, Line, Price, PriceDetail, ProfilePic, Reviews, ReviewsItem, ReviewsItemUser, ReviewsItemUserImg, ReviewsItemUserInfo, ReviewsItemUserInfoName, ReviewsTitle, Right, Seller, SellerTitle, StarImg, StarNumber, User, UserName, UserSeller, UserSellerBox, UserSellerBoxItens, UserSellerContact, UserSellerImg, UserSellerInfo, UserSellerName } from "./Styles"

export const House = () => {
  return (
    <HouseContainer>
        <Container>
          <Left>
            <BreadCrumb>Cidades -- Porto Alegre</BreadCrumb>
            <Desc>Descrição da Casa</Desc>

            <User>
              <ProfilePic src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
              <UserName>Jonh Doe</UserName>
              <HouseStars>
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                <StarNumber>5</StarNumber>                
              </HouseStars>
            </User>
            <Slider houses={houseImgs} />
            <AboutHouse>Sobre a Casa</AboutHouse>
            <AboutHouseContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nemo quam impedit et accusamus perferendis officiis minus, 
              in architecto quasi cupiditate perspiciatis quo! Vitae, ducimus quia officiis sint exercitationem ullam. Quia!
            </AboutHouseContent>
            <Seller>
              <SellerTitle>Sobre o(a) vendedor(a)</SellerTitle>
              <UserSeller>
                <UserSellerImg src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                <UserSellerInfo>
                  <UserSellerName>Jonh Doe</UserSellerName>
                  <HouseStars>
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarNumber>5</StarNumber>                
                  </HouseStars>
                  <UserSellerContact>Contact me</UserSellerContact>
                </UserSellerInfo>
              </UserSeller>
              <UserSellerBox>
                <UserSellerBoxItens>
                  <Item>
                    <ItemTitle>De</ItemTitle>
                    <ItemDesc>Capão da Canoa</ItemDesc>                    
                  </Item>  
                  <Item>
                    <ItemTitle>Tempo medio de Resposta</ItemTitle>
                    <ItemDesc>4 horas</ItemDesc>                    
                  </Item>  
                  <Item>
                    <ItemTitle>Ultima vez online</ItemTitle>
                    <ItemDesc>1 dia atrás</ItemDesc>                    
                  </Item>  
                  <Item>
                    <ItemTitle>Idioma(s)</ItemTitle>
                    <ItemDesc>Português</ItemDesc>                    
                  </Item>                  
                </UserSellerBoxItens>
                <Line />
                <ItensParagraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem possimus fugiat alias sapiente commodi fugit,
                     expedita magni reprehenderit nisi veritatis, 
                     vel perspiciatis est accusantium sint praesentium corrupti dicta eaque.
                  </ItensParagraph>
              </UserSellerBox>
            </Seller>
            <Reviews>
              <ReviewsTitle>Reviews</ReviewsTitle>
              <ReviewsItem>
                <ReviewsItemUser>
                  <ReviewsItemUserImg src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                  <ReviewsItemUserInfo>
                    <ReviewsItemUserInfoName>Jonh Doe</ReviewsItemUserInfoName>
                    <Country>
                      <CountryImg src="https://img2.gratispng.com/20180319/uhq/kisspng-ball-brand-yellow-symbol-brazil-5ab05ce0049077.1004927615215075520187.jpg" alt="" />
                      <CountryName>Brasil</CountryName>
                    </Country>
                  </ReviewsItemUserInfo>
                </ReviewsItemUser>
                <HouseStars>
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarNumber>5</StarNumber>                
                </HouseStars>
                <Comment>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                   quaerat et consequatur sapiente, alias exercitationem adipisci enim, 
                   quam possimus expedita repellendus. Velit modi saepe odio eaque, quas aliquid ducimus voluptatem!
                </Comment>
                <Helpful>
                  <HelpfulTitle>Útil?</HelpfulTitle>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" />
                  <HelpfulOption>Sim</HelpfulOption>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/1633/1633636.png" alt="" />
                  <HelpfulOption>Não</HelpfulOption>
                </Helpful>
              </ReviewsItem>
              <Line />
              <ReviewsItem>
                <ReviewsItemUser>
                  <ReviewsItemUserImg src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                  <ReviewsItemUserInfo>
                    <ReviewsItemUserInfoName>Jonh Doe</ReviewsItemUserInfoName>
                    <Country>
                      <CountryImg src="https://img2.gratispng.com/20180319/uhq/kisspng-ball-brand-yellow-symbol-brazil-5ab05ce0049077.1004927615215075520187.jpg" alt="" />
                      <CountryName>Brasil</CountryName>
                    </Country>
                  </ReviewsItemUserInfo>
                </ReviewsItemUser>
                <HouseStars>
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarNumber>5</StarNumber>                
                </HouseStars>
                <Comment>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                   quaerat et consequatur sapiente, alias exercitationem adipisci enim, 
                   quam possimus expedita repellendus. Velit modi saepe odio eaque, quas aliquid ducimus voluptatem!
                </Comment>
                <Helpful>
                  <HelpfulTitle>Útil?</HelpfulTitle>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" />
                  <HelpfulOption>Sim</HelpfulOption>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/1633/1633636.png" alt="" />
                  <HelpfulOption>Não</HelpfulOption>
                </Helpful>
              </ReviewsItem>
              <Line />
              <ReviewsItem>
                <ReviewsItemUser>
                  <ReviewsItemUserImg src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                  <ReviewsItemUserInfo>
                    <ReviewsItemUserInfoName>Jonh Doe</ReviewsItemUserInfoName>
                    <Country>
                      <CountryImg src="https://img2.gratispng.com/20180319/uhq/kisspng-ball-brand-yellow-symbol-brazil-5ab05ce0049077.1004927615215075520187.jpg" alt="" />
                      <CountryName>Brasil</CountryName>
                    </Country>
                  </ReviewsItemUserInfo>
                </ReviewsItemUser>
                <HouseStars>
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarImg src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" alt="" />
                  <StarNumber>5</StarNumber>                
                </HouseStars>
                <Comment>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                   quaerat et consequatur sapiente, alias exercitationem adipisci enim, 
                   quam possimus expedita repellendus. Velit modi saepe odio eaque, quas aliquid ducimus voluptatem!
                </Comment>
                <Helpful>
                  <HelpfulTitle>Útil?</HelpfulTitle>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/25/25297.png" alt="" />
                  <HelpfulOption>Sim</HelpfulOption>
                  <HelpfulIcon src="https://cdn-icons-png.flaticon.com/512/1633/1633636.png" alt="" />
                  <HelpfulOption>Não</HelpfulOption>
                </Helpful>
              </ReviewsItem>
              <Line />
            </Reviews>
          </Left>
          <Right>
            <Price>
              <HouseTitle>Titulo da Casa</HouseTitle>
              <HousePrice>$ 55.55</HousePrice>              
            </Price>
            <PriceDetail>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum nemo nulla natus accusantium quas animi, 
              facilis sint eveniet aperiam eligendi velit repellat officiis earum fuga, aspernatur tenetur, aliquam sed.
              </PriceDetail>
            <Detail>
              <DetailItem>
                <CheckImg src="https://w7.pngwing.com/pngs/633/576/png-transparent-check-mark-scalable-graphics-green-tick-angle-leaf-logo.png" alt="" />
                <CheckInfo>2 Quartos</CheckInfo>
              </DetailItem>
              <DetailItem>
                <CheckImg src="https://w7.pngwing.com/pngs/633/576/png-transparent-check-mark-scalable-graphics-green-tick-angle-leaf-logo.png" alt="" />
                <CheckInfo>2 Banheiros</CheckInfo>
              </DetailItem>
              <DetailItem>
                <CheckImg src="https://w7.pngwing.com/pngs/633/576/png-transparent-check-mark-scalable-graphics-green-tick-angle-leaf-logo.png" alt="" />
                <CheckInfo>1 Sala de Estar</CheckInfo>
              </DetailItem>
              <DetailItem>
                <CheckImg src="https://w7.pngwing.com/pngs/633/576/png-transparent-check-mark-scalable-graphics-green-tick-angle-leaf-logo.png" alt="" />
                <CheckInfo>1 Cozinha</CheckInfo>
              </DetailItem>
            </Detail>
            <DetailButton>Seguir</DetailButton>
          </Right>
        </Container>
    </HouseContainer>
  )
}

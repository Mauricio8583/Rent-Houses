import styled from "styled-components";

export const HouseContainer = styled.div`
     display: flex;
     justify-content: center;

`

export const Container = styled.div`
     width: 1400px;
     padding: 30px 0px;
     display: flex;    
     gap: 50px;

`

export const Left = styled.div`
    width: 700px;
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const Right = styled.div`
    width: 400px;
    flex: 1;
    border: 1px solid lightgrey;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: sticky;
    top: 150px;
    height: max-content;
    max-height: 300px;

`

export const BreadCrumb = styled.span`
     font-weight: 300;
     font-size: 13px;
     color: #555;

`

export const Desc = styled.h1`


`

export const User = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

`

export const ProfilePic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;

`

export const UserName = styled.span`


`

export const HouseStars = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

`

export const StarImg = styled.img`
    width: 18px;
    height: 18px;    

`

export const StarNumber = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #ffc108;

`

export const AboutHouse = styled.h2`
    font-weight: 400;

`

export const AboutHouseContent = styled.p`
    font-weight: 300;
    color: #555;
    line-height: 25px;

`

export const Seller = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const SellerTitle = styled.h2`


`

export const UserSeller = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

`

export const UserSellerImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;

`

export const UserSellerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const UserSellerName = styled.span`


`

export const UserSellerContact = styled.button`
     background-color: #FFF;
     border-radius: 5px;
     border: 1px solid gray;
     padding: 10px;
     cursor: pointer;

`

export const UserSellerBox = styled.div`
     width: 700px;
     border: 1px solid lightgray;
     border-radius: 5px;
     padding: 20px;
     margin-top: 20px;

`

export const UserSellerBoxItens = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;

`

export const ItensParagraph = styled.p`


`

export const Item = styled.div`
     width: 300px;
     display: flex;
     flex-direction: column;
     gap: 10px;
     margin-bottom: 20px;

`

export const ItemTitle = styled.span`
     font-weight: 300;

`

export const ItemDesc = styled.span`


`

export const Line = styled.hr`
     height: 0;
     border: 1px solid lightgray;
     margin-bottom: 20px;

`

export const Reviews = styled.div`
     width: 900px;
     margin-top: 50px;

`

export const ReviewsTitle = styled.h2`


`

export const ReviewsItem = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;
     margin: 20px 0;

`

export const ReviewsItemUser = styled.div`
     display: flex;
     align-items: center;

`

export const ReviewsItemUserImg = styled.img`
     height: 50px;
     width: 50px;
     border-radius: 50%;

`

export const ReviewsItemUserInfo = styled.div`


`

export const ReviewsItemUserInfoName = styled.span`


`

export const Country = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;
     color: #555;

`

export const CountryImg = styled.img`
     width: 20px;

`

export const CountryName = styled.span`


`

export const Comment = styled.p`


`

export const Helpful = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;

`

export const HelpfulTitle = styled.span`


`

export const HelpfulOption = styled.span`


`

export const HelpfulIcon = styled.img`
     width: 15px;

`

export const Price = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;

`

export const PriceDetail = styled.p`
     color: #555;
     margin: 10px 0;

`

export const Detail = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;

`

export const DetailButton = styled.button`
      background-color: #1dbf73;
      padding: 10px;
      color: #FFF;
      border: none;
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;

`

export const HouseTitle = styled.h3`
     font-weight: 500;

`

export const HousePrice = styled.h2`
      font-weight: 300;

`

export const DetailItem = styled.div`
      font-size: 15px;

`

export const CheckImg = styled.img`
     width: 14px;

`

export const CheckInfo = styled.span`


`
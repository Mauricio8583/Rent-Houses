import { Featured } from "../../components/featured/Featured"
import { Slide } from "../../components/slide/Slide"
import { HomeContainer } from "./Styles"

export const Home = () => {
  return (
    <HomeContainer>
        <Featured />
        <Slide />
    </HomeContainer>
  )
}

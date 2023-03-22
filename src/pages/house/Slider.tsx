import styled from "styled-components"
import { useState } from 'react'

const SliderContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;      

`

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out 0.5s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;

`

const Slide = styled.div`
    height: 100;
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

export const Slider = ({houses}) => {

   const getWidth = () => window.innerWidth;

   const [translate, setTranslate] = useState<Number>(0);

  return (
    <SliderContainer>
        <SliderContent translate={translate} width={getWidth()}>
            {houses.map((house) => (
                <Slide key={house.id} img={house.img} />
            ))}             
        </SliderContent>                        
    </SliderContainer>
  )
}

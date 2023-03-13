import styled from "styled-components";

export const FeaturesContainer = styled.div`
    background-color: #00CCFF;
    display: flex;
    justify-content: center;
    padding: 100px 0;
    margin: 10px 0;


`

export const Container = styled.div`
    display: flex;
    width: 1400px;
    align-items: center;
    gap: 200px;

`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    &:first-child{
        flex: 2;
    }

    &:last-child{
        flex: 3;
    }

`

export const AnoucementVideo = styled.video`
    width: 720px;

`

export const MainTitle = styled.h1`


`

export const Title = styled.div`


`

export const Info = styled.p`


`
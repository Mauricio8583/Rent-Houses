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

export const AnnoucementImg = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 10px;    

`

export const MainTitle = styled.h1`
    font-weight: 500;
    margin-bottom: 10px;

`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 18px;

`

export const Info = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    line-spacing: 1px;
`
import React from 'react';
import styled from 'styled-components';
import Rain from '../assets/rain.png'

const Container = styled.div`
    width: calc(100% / 4);
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid white;
`

const Title = styled.h1`
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: white;
`

const Icon = styled.img`
    width: 60px;
    object-fit: fill;
    object-position: center;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function City({Item}) {
    
  return (
    <Container>
        <Title>
        {Item && (Item.location.name)}
        </Title>
        <Icon src={!Item ? Rain : "https:" + Item.current.condition.icon}/>
        <Info>
            {Item.current.feelslike_c} | {Item.current.feelslike_f}
        </Info>
    </Container>
  )
}

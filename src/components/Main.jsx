import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Day from './Day';
import MainCard from './MainCard';

const Container = styled.div`
    width: 100vw;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

const Time = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: white;
    position: absolute;
    top: 20px;
    left: 20px;
`

const DaysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 10px;
`
        
export default function Main({Item}) {

  return (
    <Container>
        <Time>time</Time>
        <MainCard responseData={Item}/>
        <DaysContainer>
          <Day />
          <Day />
          <Day />
          <Day />
        </DaysContainer>
    </Container>
  )
}

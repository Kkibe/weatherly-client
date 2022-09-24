import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cloudy from '../assets/cloudy.png';
import Sunny from '../assets/sun.png';

const DayCard = styled.div`
  height: calc(100% - 20px);
  height: 8vw;
  max-height: 160px;
  min-height: 140px;
  min-width: 180px;
  position: relative;
  transition: transform 250ms;
  width: calc(100% / 7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px 10px;
  border-radius: 10px;
  padding: 10px;

  backdrop-filter: blur(3px);
  background-color: rgba(255,255,255, 0.4);
  border: 1px solid rgba(255,255,255, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0,0, 0.25);
  &:last-of-type {
    margin-right: 5px;
  }
`

const Icon = styled.img`
  width: 60px;
  object-fit: fill;
  object-position: center;

  font-size: 3.5em;
  text-shadow: 2px 2px 2px rgba(black, 0.1);
`
const Temperature = styled.div`
  align-items: flex-start;
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  color:#46aab3;
`

const DayName = styled.div`
  font-size: 0.9em;
  text-transform: uppercase;
  color:#46aab3;
`


  const Unit = styled.span`
    font-size: 0.8em;
    margin-left: 3px;
  `

export default function Day({data}) {
  return (
    <DayCard>
        <DayName>{data.day}</DayName>
        <Icon src={
          data.text.split("").includes("Cloudy") ? Cloudy : Sunny
        }/>
        <Temperature> {Math.round(((data.high + data.low)  - 32 ) * 5/9) }<Unit>°C</Unit></Temperature>
    </DayCard>
  )
}

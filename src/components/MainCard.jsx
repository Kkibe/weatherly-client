import {useState } from 'react';
import {LocationOn} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Cloudy from '../assets/cloudy.png';

const Container = styled.div`
    width: 100vw;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0px;
    position: relative;
`

const Name = styled.h1`
    font-size: 28px;
    font-weight: 600;
    color: white;
`

const DateContainer = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: #46aab3;
`
const Icon = styled.img`
  width: 100px;
  object-fit: fill;
  object-position: center;

`
const Temperature = styled.div`
  align-items: flex-start;
  display: flex;
  font-size: 22px;
  justify-content: center;
  color:#fff;
`

const Condition = styled.div`
    font-size: 18px;
    color: white;
`

const ButtonContainer = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 50px;
`

const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: transparent;
    cursor: pointer;
    color: white;
    *{
        font-size: 18px;
        color: white;
    }
`
export default function MainCard({responseData}) {
  const [units, setUnits] = useState('C');

  const handleUnits = () => {
    if(units === 'C'){
        setUnits('F')
    } else setUnits('C')
  }

  return (
    <Container>
        <Name>
            {responseData && (responseData[0].location.name  + ", ")}
            {responseData && (responseData[0].location.country)}
            {!responseData && "Nairobi, Kenya"}
        </Name>
        <DateContainer>{responseData && (responseData[0].location.localtime.split(" ")[0])}</DateContainer>
        <Icon src={
              !responseData ? Cloudy : "https:" + responseData[0].current.condition.icon
            }/>
        <Temperature>
        {responseData && (units=== 'C' ? responseData[0].current.temp_c : responseData[0].current.temp_f)}°{units}
        </Temperature>
        <Condition>
            {responseData && (responseData[0].current.condition.text)}
            {!responseData && 'rainy'}
        </Condition>
        <ButtonContainer>
            <Button><LocationOn /></Button>
            <Button onClick={handleUnits}>°{units}</Button>
        </ButtonContainer>
    </Container>
  )
}

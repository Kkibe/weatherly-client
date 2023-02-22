import {useEffect, useState } from 'react';
import {LocationOn} from '@mui/icons-material';
import { useGeolocated } from "react-geolocated";
import React from 'react';
import styled from 'styled-components';
import Cloudy from '../assets/cloudy.png';
import Sunny from '../assets/sun.png';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    min-height: 300px;
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
    text-transform: uppercase;
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
export default function MainCard({responseData, extras, location, value}) {
  const [units, setUnits] = useState('C');
  const {locale, setLocale} = location;
  const {data, setData} = value

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });

  const handleUnits = () => {
    if(units === 'C'){
        setUnits('F')
    } else setUnits('C')
  }



  const handleLocation = () => {
    !isGeolocationAvailable ? (
        alert("Geolocation is not supported by this browser.")
    ) : !isGeolocationEnabled ? (
        alert("Geolocation is not enabled")
    ) : coords ? (
        setLocale(coords)
    ) : (
        alert("Loading Location")
    );


    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {format: 'json', u: 'f'},
        headers: {
          'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d', 
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
  
      const getLocation = () => {
        if(locale) {
          options.params.lat = locale.latitude
          options.params.long = locale.longitude  
          axios.request(options).then(function (response) {
            setData(response.data);
          }).catch(function (error) {
              return
          });  
        } 
      }
  
      getLocation()
  }

  return (
    <Container>
        <Name>
            {extras && (extras.city  + ", ")}
            {extras && (extras.country)}
        </Name>
        <DateContainer>{new Date().toLocaleDateString()}</DateContainer>
        <Icon src={
              responseData && responseData.condition.text.split("").includes("Cloudy") ? Cloudy : Sunny
            }/>
        <Temperature>
        {responseData && (units=== 'C' ? Math.round((responseData.condition.temperature  - 32 ) * 5/9)  : responseData.condition.temperature)}°{units}
        </Temperature>
        <Condition>
            {responseData && (responseData.condition.text)}
        </Condition>
        <ButtonContainer>
            <Button onClick = {handleLocation}><LocationOn /></Button>
            <Button onClick={handleUnits}>°{units}</Button>
        </ButtonContainer>
    </Container>
  )
}

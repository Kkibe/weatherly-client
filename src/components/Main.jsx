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
    font-size: 26px;
    font-weight: 600;
    position: absolute;
    top: 10px;
    left: 10px;
`

const DaysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 10px;
`
        
export default function Main({value, location}) {
  const [forecasts, setForecasts] = useState('');
  const [current, setCurrent] = useState('');
  const [extras, setExtras] = useState('');
  const {data, setData} = value

  useEffect(() => {
    setForecasts(data.forecasts);
    setCurrent(data.current_observation);
    setExtras(data.location);
  }, [])
  
  return (
    <Container>
        <Time>
          {new Date().toDateString()}
        </Time>
        <MainCard responseData={current} extras={extras} location={location} value={data}/>
        <DaysContainer>
          {
            forecasts && forecasts.slice(1, 5).map(forecast => {
                return <Day data={forecast} key={forecast.date + forecast.day} />
            })
          }

        </DaysContainer>
    </Container>
  )
}

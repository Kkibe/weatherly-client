
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import City from './components/City';
import Footer from './components/Footer';
import Main from './components/Main';
import Notification from './components/Notification';



const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(112,134,146, 0.6);
`

const CitiesContainer = styled.div`
  width: 100vw;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

function App() {
  const [responseData, setResponseData] = useState([]);

  let status;
  const setStatus = () => {
     if(document.readyState === 'interactive'){
      status = 'interactive'
      
    } else return;
  }
  setStatus();

  useEffect(() => {
    ( function () {
      const cityList = ['London', 'Paris', 'Nairobi', 'Moscow' ]
      
      cityList.forEach(city => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=730a9b93e6c64a57bb9145731222206&q=${city}&aqi=no`).then(function (response) {
          setResponseData(() => responseData.push(response.data));
          console.log(responseData)
        }).catch(function (error) {
        console.error(error);
        });
      })
    })()
  }, [status])
  return (
    <Container>
      <Notification />
      {responseData  && <Main Item={responseData}/>}
      <CitiesContainer>
        {responseData && responseData.map(item => {return <City Item={item}/>})}
        {!responseData && 'cities'}
      </CitiesContainer>
      <Footer />
    </Container>
  );
}

export default App;

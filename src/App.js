import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Footer from './components/Footer';
import Main from './components/Main';
import Notification from './components/Notification';



const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(112,134,146, 0.6);
`

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://yahoo-weather5.p.rapidapi.com/weather',
      params: {location: 'sunnyvale', format: 'json', u: 'f'},
      headers: {
        'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setData(response.data);

      setLoading(false)
    }).catch(function (error) {
      setError(error);
    });
  }, [])
  return (
    <Container>
      <Notification />
      {data && <Main data={data}/>}
      <Footer />
    </Container>
  );
}

export default App;

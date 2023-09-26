import React from 'react';
import styled from 'styled-components'
import Footer from './components/Footer';
import Store from './components/ecommerce/pages/Store';

import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Error from './components/ecommerce/pages/Error';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: transparent;
`
function App() {
  return (
    <Container>
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<div />} />
          <Route path='*' element={<Error />}/>
      </Routes>
    </Container>
  );
}

export default App;

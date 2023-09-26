import React, { useState } from 'react';
import styled from 'styled-components';
import {Clear, LocationOn} from '@mui/icons-material';

const Container = styled.div`
  width: 100vw;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background: ${props => props.bg};
  position: relative;

`
const Note = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ClearContainer = styled.span`
    color: 'white';
    font-size: '20px';
    font-weight: '600';
    display: flex;
    align-items: center;
    justify-content: center;


    cursor: 'pointer';
    &:hover{
      color: #ff1616;
      border-radius: 50%;
      background-color:#e5e5e5;
    }
`

export default function Notification() {
  const [visible, setVisible] = useState("flex");
  const handleVisibility = () => {
    setVisible("none");
  }
  return (
    <Container bg='#2dc245' style={{
      display: visible
    }}>
      <Note>Click on the <LocationOn /> button to share your current location.</Note>
      <ClearContainer onClick={handleVisibility}><Clear/></ClearContainer>
    </Container>
  )
}

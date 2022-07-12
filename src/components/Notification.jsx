import React from 'react';
import styled from 'styled-components';
import {Clear, LocationOn} from '@mui/icons-material';

const Container = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background-color: ${props => props.bg};
  position: relative;

`
const Note = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ClearContainer = styled.span`
    color: 'white';
    font-size: '24px';
    font-weight: '600';
    right: '20px';
    position: 'fixed';
    cursor: 'pointer';
`

export default function Notification() {
  return (
    <Container bg='#00B140'>
      <Note>Click on the <LocationOn /> button to share your current location.</Note>
      <ClearContainer><Clear/></ClearContainer>
    </Container>
  )
}

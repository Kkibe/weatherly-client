import { ArrowBack, ErrorOutline } from '@mui/icons-material'
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height:70vh;
    
    .icon{
        font-size: 45px;
        font-weight: bold;
        margin: 10px;
        color: red;
    }
    
`

const Title = styled.h1`
    font-size:28px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Body = styled.p`
font-size:20px;
`

const Link = styled.a`
    font-size:28px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
    cursor: pointer;
`

export default function Error() {

    const handleClick = () => {
        window.history.back();
    }
  return (
    <Container>
        <Title><ErrorOutline className='icon'/> 404 error</Title>
        <Body>Page Not Found</Body>
        <Link onClick={handleClick}><ArrowBack/> go back</Link>
    </Container>
  )
}

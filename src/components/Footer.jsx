import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 150px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const IconContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  color: #444443;
	font-weight: 700;
	text-decoration: none;
  cursor: pointer;
  &:hover {
	  text-decoration: underline;
  }
`

export default function Footer() {
  return (
    <Container>
      <IconContainer>
        <Link href="https://www.facebook.com/kibetkorirc"><Facebook /></Link>
        <Link href="https://twitter.com/ancientpupy"><Twitter /></Link>
        <Link href="https://www.instagram.com/ancientpupy"><Instagram /></Link>
        <Link href="https://www.linkedin.com/in/kibetkorir"><LinkedIn /></Link>
        <Link href="https://github.com/K-kibet/"><GitHub /></Link>
      </IconContainer>
      <Wrapper>Created with ❤️ by <Link href='https://k-kibet.github.io/' style={{
        marginLeft: '10px'
      }}>Kibet</Link></Wrapper>
    </Container>
  )
}

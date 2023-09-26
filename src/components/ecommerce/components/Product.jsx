import React, {useEffect, useState } from 'react';

import {Search, Share, ShareSharp, ShareTwoTone, ShoppingBasket, Star} from '@mui/icons-material';
import styled from 'styled-components';

const Figure = styled.figure`
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 290px;
  width: 100%;
  color: #333333;
  text-align: center;
  background-color: #ffffff;
  line-height: 1.6em;
  position: relative;
  
  * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}


&:hover {
    *{
   .snip1268.hover 
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    }

    img {
        opacity: 0.8;
      }
  }
`
const ImageContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  max-width: 100%;
  vertical-align: top;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
`

const IconContainer= styled.div`
position: absolute;
left: 20px;
right: 20px;
opacity: 0;
-webkit-transform: translateY(-100%);
transform: translateY(-100%);
top: 20px;
display: flex;
justify-content: space-between;
`

const AddToCart = styled.a`
  position: absolute;
  left: 20px;
  right: 20px;
  opacity: 0;

  position: absolute;
  bottom: 20px;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  font-size: 0.8em;
  color: #000000;
  line-height: 46px;
  letter-spacing: 1.5px;
  background-color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`

const Icon = styled.a`
width: 32.5%;
background: #ffffff;
display: flex;
align-items: center;
justify-content: center;
*{
    line-height: 46px;
    font-size: 20px;
    color: #000000;
    text-align: center;
    opacity: 0.7;
    margin: 0;
}
&:hover{
    background: #000000;
    *{
        color: #ffffff;
        opacity: 1;
          
    }
}
` 

const Figcaption = styled.figcaption`
  padding: 20px 20px 30px;
`

const Title = styled.h2`
margin: 0;
text-align: left;
margin-bottom: 10px;
font-weight: 700;
`
const Description = styled.p`

margin: 0;
text-align: left;

margin-bottom: 15px;
font-size: 0.85em;
font-weight: 500;
` 
const Price = styled.div`  
  font-size: 1.3em;
  opacity: 0.5;
  font-weight: 700;
  text-align: right;
`
const Tag = styled.span`
    width: wrap-content;
    padding: 6px;
    border: 1px solid #2dc245;
    color: #2dc245;
    font-size: 14px;
    position: absolute;
    bottom: 20px;
    border-radius: 20px 0 20px 0;
    left: 5px;
    z-index: 1;
`

export default function Product() {
  return (
    <Figure>
    <ImageContainer >
      <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg" alt="sq-sample15"/>
      <IconContainer class="icons">
        <Icon href="#"><Star /></Icon>
        <Icon href="#"> <Share/></Icon>
      </IconContainer>
      <AddToCart >Add to Cart</AddToCart>
    </ImageContainer>
    <Figcaption>
      <Title>Footwear</Title>
      <Description>Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!</Description>
      <Price>$195.00 </Price>
    </Figcaption>
    <Tag>TRENDING</Tag>
  </Figure>
  )
}

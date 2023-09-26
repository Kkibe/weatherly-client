import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Product from '../components/Product'
import Featured from '../components/Featured'
import { ProductionQuantityLimitsSharp, ShoppingBag } from '@mui/icons-material'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #e5e5e5;

  margin-top: 50px;
`

const ShoppingIcon = styled.a`
  margin: 5px auto;
  padding:5px;
  cursor: pointer;
  border-radius: 50%;
  position: fixed;
  top: 0;
  right: 20px;
  text-decoration: none;
  color: #000;

  .shoppingIcon{
    font-size: 28px;
  }

  &:hover{
    background: #000;
    color: #fff;
  }
`

const Span = styled.span`
  width:10px;
  height:10px;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  font-size:12px;
  padding:3px;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Main = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
background: #e5e5e5;
flex-wrap: wrap;
position: relative;


`

export default function Store() {
  
  return (
    <Container>
        <ShoppingIcon href='store/cart'>
          <Span>5</Span>
          <ShoppingBag className='shoppingIcon'/>
        </ShoppingIcon>
        <Featured />
        <Main>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Main>
    </Container>
  )
}

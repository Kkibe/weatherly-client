import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    background: #ebf4fc;
    scroll-behavior:smooth;
    
    
    
    * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
    `
const Button = styled.button`
        width: wrap-content;
        padding: 8px;
        border: 1px solid ;
        color: #FFF;
        background: #000000;
        cursor: pointer;
        font-size: 20px;
        z-index:5;
        display: none;
        &:hover{
            color: #000000;
            background: #FFF;
            
        }
    `
const Arrow = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        z-index: 10;

        &:first-of-type{
            left: 10px;
        }

        &:last-of-type{
            right: 10px;
        }

        &:hover{
            background: #FFF;
        }
    `
const Wrapper = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        `
        
const Slider = styled.div`
            min-width: 100vw;
            height: 100%;
            padding:0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            
            &:hover{
                button{
                    display: flex;
                }
            }
    `

const ImageContainer = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:transparent;
        opacity: 0.5;
        position: relative;
        `
const Image = styled.img`
    width:80%;
    height: 100%;
    object-fit: fill;
    object-position: center;
    `
const Info = styled.div`
                background-color:transparent;
                
                height: 100%;
                flex: 1;
                padding: 0 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                position: absolute;
                z-index:10;
                left: 0;
                right: 0;
                
                > h1{
                    font-size: 40px;
                }
                
                > p{
                    margin: 30px 0px;
                    font-size: 20px;
                    font-weight: 500;
                    letter-spacing: 3px;
                }
                `

const slides = [
    {
        id: 1,
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg',
        title: "Footwear",
        description: "Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!",
        link: ""
    },
    {
        id: 2,
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg',
        title: "DEVEDITOR",
        description: "A free full-featured online code editor for HTML, CSS and JAVASCRIPT.",
        link: ""
    },
    {
        id: 3,
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg',
        title: "Lc300",
        description: "Share Your Files and Images Across Your Browser Safely",
        link: ""
    }
    
]

export default function Featured() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container >
                
        <Arrow className="arrow"  onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
        </Arrow>
           
           <Wrapper className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {
                slides && slides.map(slide => {
                    return (
                        <Slider className="slider">
                            
                            <ImageContainer className="image-container">
                                <Image src={slide.img} alt="" />
                            </ImageContainer>
                            <Info className="info">
                                <h1>{slide.title}</h1>
                                <p>
                                    <ul>
                                        <li>- Fancy Jeans. KSh 2,500.</li>
                                        <li>- Premium Quality Rugged Jeans.</li>
                                        <li>- Men's Jeans/Rugged Jeans.</li>
                                    </ul>
                                </p>
                               <Button>ADD TO CART</Button>
                            </Info>
                        </Slider>
                    )
                })
            }
           </Wrapper>
        
        <Arrow  onClick={() => handleClick("right")}>
           <ArrowRightOutlined />
        </Arrow>
    </Container>
    );
}
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;

  .div-down {
    animation: down 0.8s forwards;
  }

  @keyframes down {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(100vh);
    }
  }

  li {
    width: 40px;
    height: 40px;
    background-color: rgba(255,255,255,0.15);
    border-radius: 50%;
    display: block;
    position: absolute;
    bottom: 0;
    animation: bubbleup 5s infinite linear backwards;
  }

  @keyframes bubbleup {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(0);
    } 25% {
       opacity: 1;
       transform: scale(1) translateY(0);
    } to {
      transform: scale(1.5) translateY(-250px);
    }
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  animation: fade 0.8s;
  z-index: 1;
  outline: none;

  button {
    margin-top: 15px;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.9);
    } to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const BubblesTheme = (props) => {

  useEffect(() => {
    createBubbles();
  }, []);  

  const random = (min, max) => {
    return (Math.random() * (max-min) + min);
  }

  const createBubbles = () => {
    const bubbles = document.querySelector('ul');

    for(let i=0; i<51; i++){
      const bubble = document.createElement('li')
      
      const size = Math.floor(random(10,100));
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`; 

      bubble.style.left = `${random(1,90)}%`; 
      bubble.style.animationDelay = `${random(0.5,5)}s`; 
      bubble.style.animationDuration = `${random(2,10)}s`; 

      bubbles.appendChild(bubble);
    }    
  }

  const divDown = (event) => {
    const divTitle = document.querySelector('.div-title');
    divTitle.classList.add("div-down");
    
    divTitle.addEventListener('animationstart', event => {
      if(event.animationName === "down")
        document.querySelector('body').style.overflow = "hidden";
    })

    divTitle.addEventListener('animationend', event => {
      if(event.animationName === "down")
        divTitle.style.display = "none";
        document.querySelector('body').style.overflow = "none";
    })
  }

  return (
    <Section>
      {props.showText && <Div className="div-title">
        Bubbles :)
        <button onClick={(event) => divDown()}>Tirar esse texto do meio pra eu ver melhor</button>
        <Link to="/">
          <button>Home</button>
        </Link>  
      </Div> }
      <ul>
      </ul>
    </Section>
  )
}

export default BubblesTheme;
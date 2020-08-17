import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

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

const FlowersTheme = (props) => {

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
        Aqui terá umas flores :)
        <p>Mas ainda está em construção</p>
        <Link to="/">
          <button>Home</button>
        </Link>  
      </Div> }
      <ul>
      </ul>
    </Section>
  )
}

export default FlowersTheme;
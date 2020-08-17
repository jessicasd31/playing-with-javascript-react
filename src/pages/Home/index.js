import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import BubblesTheme from '../BubblesTheme'

const Links = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: strech;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
    border: 2px solid black;
    border-right: none;
    position: relative;

    &:nth-last-child(1) {
      border-right: 2px solid black;
    }

    h4 {
      transition: transform .5s;
      position: absolute;
    }

    &:hover {
      h4 {
        transform: scale(1.2);
      }
    }

    div{
      top: 0;
      width: 100%;
      z-index: -1;
      left: 0;
    }
  }
`

const Home = () => {
  return (
    <Links>
      <Link to="/bubbles-theme">
        <div>
          <BubblesTheme />
        </div>
        <h4>Bubbles Theme</h4>
      </Link>
      <Link to="/flowers-theme">
        <h4>Flowers Theme</h4>
      </Link>
      <Link to="/">
        <h4>Surprise Theme</h4>
      </Link>
    </Links>
  )
}

export default Home;
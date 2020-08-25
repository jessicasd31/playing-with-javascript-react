import React from 'react'
import styled from 'styled-components'

const Content = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-image: url(${require('../../assets/homer.jpg')});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`

const DivItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 45%;
`

const Item = styled.h3`
  width: 150px;
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  padding: 1px 15px;
  animation: down infinite backwards;
  animation-duration: ${props => props.duration}s;
  animation-delay: ${props => props.delay}s;
  transform: translateY(45vh) rotate(${props => props.rotate}deg);
  position: absolute;
  left: ${props=>props.position}px;

  @keyframes down {
    from {
      opacity: 0;
      transform: translateY(0);
    } 50% {
      opacity: 1;
    } to {
      opacity: 0;
      left: 0px;
    }
  }
`

const listItems = ['Boletos','Vida social','Faxinar','Trabalhar','Estudar','Academia','vida amorosa', 'Equilíbrio emocional']
const random = (min=0, max=1) => (Math.random() * (max - min)) + min

const Funnel = (props) => {

  const list = listItems.map((item,i) => {
    const position = i%2 == 0 || i===0 ? i*(-50) : i*50;
    const rotate = position <= 0 ? 80 : -80;
    const duration = random(4,6);
    const delay = random(0,4);

    return(
      <Item
        key={i}
        rotate={rotate}
        position={position}
        duration={duration}
        delay={delay}
      >
        {item}
      </Item>
    )

  })

  return (
    <Content>
      {props.showText && <DivItems>
        { list }
      </DivItems> }
    </Content>
  )
}

export default Funnel;


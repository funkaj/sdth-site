import React from 'react'
import styled from 'styled-components'
import { NAV_HEIGHT } from 'Utils/constants'

export default function PageTitle({ children, ...props }) {
  return (
    <Container>
      <H1 {...props}>
        {children}
      </H1>
    </Container>
  )
}

const H1 = styled.div`
  background: linear-gradient(rgba(82,48,181,0.7), 70%, rgba(129,74,198,0.4));
  border-radius: 5px;
  font-size: 7rem;
  font-weight: normal;
  padding: 5rem;
  text-shadow: 5px 5px 10px ${props => props.theme.primaryDark};
  text-transform: uppercase;

  @media(max-width: 480px) {
    font-size: 5rem;
    padding: 2rem;
  }
`

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15rem;
  left: 0;
  right: 0;

  @media(max-width: 480px) {
    top: calc(10rem + ${NAV_HEIGHT});
  }

  @media(max-width: 450px) {
    top: calc(18rem + ${NAV_HEIGHT});
  }
`

import React from 'react'
import {Router} from './routes/Router'
import { GlobalStyle, Container } from './GlobalStyle'
import { GlobalState } from './context/GlobalState'


function App() {

  return (
    <Container>
      <GlobalState>
        <GlobalStyle/>
        <Router/>
      </GlobalState>
    </Container>
  )
}

export default App;

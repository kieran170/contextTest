import React from "react"
import { Router} from "@reach/router"
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/page5'
import {OrgProvider} from './context/context'
import {UserProvider} from './context/userContext'

function App() {
  return (
    <OrgProvider>
    <UserProvider>
    <Router>
      <Page1 path='/' />
      <Page2 path='/2' />
      <Page3 path='/3' />
      <Page4 path='/4' />
      <Page5 path='/5' />
    </Router>
    </UserProvider>
    </OrgProvider>
  );
}

export default App;

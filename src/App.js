import React from "react"
import { Router} from "@reach/router"
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import {OrgProvider} from './context/context'

function App() {
  return (
    <OrgProvider>
    <Router>
      <Page1 path='/' />
      <Page2 path='/2' />
      <Page3 path='/3' />
    </Router>
    </OrgProvider>
  );
}

export default App;

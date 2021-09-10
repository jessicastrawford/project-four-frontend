import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import About from './components/common/About'
// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/common/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import DesignIndex from './components/designs/DesignIndex'
import DesignShow from './components/designs/DesignShow'
import ProfileShow from './components/users/ProfileShow'
import ProfileEdit from './components/users/ProfileEdit'
import DesignUpload from './components/designs/DesignUpload'

function App() {
  return (
    // <ChakraProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/log-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/designs/:designId">
          <DesignShow />
        </Route>
        <Route path="/designs">
          <DesignIndex />
        </Route>
        <Route path="/profile">
          <ProfileShow />
        </Route>
        <Route path="/profile-edit">
          <ProfileEdit />
        </Route>
        <Route path="/design-upload">
          <DesignUpload />
        </Route>
      </Switch>
    </BrowserRouter>
    // </ChakraProvider>
   
  )

}

export default App


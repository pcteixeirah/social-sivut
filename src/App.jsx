import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './components/pages/Admin'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/navbar/Sidebar'
import Reset from './components/login/Reset'
import Profile from './components/pages/Profile'
import {makeStyles} from '@material-ui/core'

import { auth } from './firebase'
//import { NavigationContainer } from '@react-navigation/native'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
})

function App() {

  const classes = useStyles()
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })

  }, [])


  return firebaseUser !== false ? (
    <Router>
      <div className={classes.root}>
        <Sidebar/>
        <Navbar firebaseUser={firebaseUser} />
        {/* <NavigationContainer>
          <Sidebar/>
        </NavigationContainer> */}
        <Switch>
          <Route exact path="/">
            inicio...
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/reset">
            <Reset/>
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>

        </Switch>

      </div>
    </Router>

  ) : (
    <div class="d-flex justify-content-center m-5">
      <div class="spinner-border m-4" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './components/admin/Admin'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Reset from './components/login/Reset'
import Profile from './components/admin/Profile'

import { auth } from './firebase'


function App() {

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
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/" exact>
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

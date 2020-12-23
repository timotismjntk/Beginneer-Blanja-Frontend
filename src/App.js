import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// importing pages
// import Product from './pages/Product.js'
import MyAdmin from './pages/MyAdmin'
import Login from './pages/Login'
import Register from './pages/register.js'
import LandingPage from './pages/LandingPage.js'
import Product from './pages/Product.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Product} exact/>
          <Route path="/admin" component={MyAdmin} />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
          <Route path="/user/LandingPage" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App



// <Route path="/" component={Home} exact/> fungsi exact itu untuk menampilkan halaman home
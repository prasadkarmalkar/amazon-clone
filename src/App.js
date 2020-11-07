import React, { useEffect } from 'react';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './ContextApi/StateProvider';
import Payment from './Components/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {

  const [{ }, dispatch] = useStateValue();
  const promise = loadStripe("pk_test_51HYT9iE6s9tXjZK5P40yTLQM4PIlq54CqvZL0hXXfVKwoFC0EoejeBhs3vpEtZ6AreUhamm8wxifjKzm8OjXismc00wWjH0u6X");

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        console.log(authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])
  return (
    // BEM Convention is going to use
    <div className="app">
      <Router>

        {/* Header */}

        {/* Home */}

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

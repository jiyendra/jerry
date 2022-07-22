import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Error from './pages/Error';
import './assets/css/nav.css'
import Jobs from './pages/Jobs';
import './assets/scss/style.scss'
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermCondition from './pages/TermCondition';
import Booknow from './pages/Booknow';
import Stripe from './pages/Stripe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/jobs" component={Jobs} />         
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />         
          <Route exact path="/term-condition" component={TermCondition} />
          <Route exact path="/booknow" component={Booknow} /> 
          <Route exact path="/stripe" component={Stripe} />         
          <Route  component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

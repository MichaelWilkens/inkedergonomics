import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Nav from './components/Navbar';
import Footer from './components/footer';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Shop from './components/shop';
import Item from './components/item';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={About} />
        <Route exact path ='/services' component={Services} />
        <Route exact path ='/contact' component={Contact} />
        <Route exact path ='/shop' component={Shop} />
        <Route path = '/item' component={Item} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;

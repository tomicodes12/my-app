import React from 'react'
import Home from './components/pages/Home'
import Contact from './components/pages/contact'
import Products from './components/pages/products'
import About from './components/pages/about'
import Navbar from './components/pages/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Slider from './components/inc/slider'

function App() {
  return (
    
    <Router>
      <div className="container">
        <Navbar />
        <Slider/>
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/contact" components={Contact} />
          <Route path="/products" components={Products} />
          <Route path="/about" components={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

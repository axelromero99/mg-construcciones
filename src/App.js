import './App.css';
import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import QuienesSomos from './components/pages/AboutUs/QuienesSomos';
import ComoTrabajamos from './components/pages/ComoTrabajamos/ComoTrabajamos';
import Galeria from './components/pages/Galeria/Galeria';
import Contactanos from './components/pages/Contactanos/Contactanos';
import Footer from './components/pages/Footer/Footer';


function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Galeria" exact component={Galeria}/>
          <Route path="/QuienesSomos" exact component={QuienesSomos}/>
          <Route path="/ComoTrabajamos" exact component={ComoTrabajamos}/>
          <Route path="/Contactanos" exact component={Contactanos}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;

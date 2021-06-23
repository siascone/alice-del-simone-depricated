import './App.css'
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Gallery from './components/gallery/gallery';
import Lessons from './components/lessons/lessons';
import News from './components/news/news';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/lessons' component={Lessons} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;

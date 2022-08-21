import './App.css';

import React from 'react'

import News from './news/News';
import Logo from './assets/images/Logo.jpg';

import WebFont from 'webfontloader';

 function App() {
  return (
    <div className="App">
    <div className='outer-container'>
    <img src={Logo} className="image" width="50px" height="50px"/>
    <div class="inner-container">
    <h1 className='title-1' id="title-1">News</h1>
    <h4 className='title-2'> आपको रखे आगे</h4>
    </div>
    </div>
    <News/>
    </div>
  )
}


export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';
import Home from './pages/home/index'
import './init.css'

hot(Home);
const render = Component =>{
    ReactDOM.render(<Component/>, document.getElementById('root'));
}

render(Home)

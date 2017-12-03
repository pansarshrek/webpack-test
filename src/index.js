import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Root from './main/root.jsx'
import './normalize.css'
import './skeleton.css'
import './font.css'

var element = document.createElement('div');
document.body.appendChild(element);

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  element
)

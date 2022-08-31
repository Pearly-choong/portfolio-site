import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './index.scss';
import App from './App';
//import Landing from './components/landing/Landing';
import "./shared/_mediaQuery.scss";
import ScrollToTop from './views/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./views/Routes";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Routes>
      <ScrollToTop>
        <App />
      </ScrollToTop>
     </Routes>
   </Router>,
  
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Categories from "./Categories";
import {Alert} from "react-bootstrap";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path={'products'} element={<Products/>}/>
                <Route path={'Categories'} element={<Categories/>}/>
                <Route path={'*'} element={<Alert variant={'danger'}>404 Page not found</Alert> }/>
            </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);


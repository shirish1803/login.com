import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

import { Card } from 'reactstrap';

function App() {
  return (
    
      
      <BrowserRouter>
        
        
        
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        
      </BrowserRouter>
      
    
  );
}

export default App;

import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch } from 'react-router-dom';

import ApolloProvider from './ApolloProvider';

import './App.scss';

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

import { AuthProvider } from './context/auth';
import DynamicRoute from './util/DynamicRoute';

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <BrowserRouter>
          <Container className="pt-5">
            <Switch>
              <DynamicRoute exact path="/" component={Home} authenticated />
              <DynamicRoute path="/register" component={Register} guest />
              <DynamicRoute path="/login" component={Login} guest />
            </Switch>
          </Container>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;

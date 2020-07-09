import React, { createContext, useReducer, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import MyRepositories from "./pages/MyRepositories"
import StarredRepositories from "./pages/StarredRepositories"

import { initialState, reducer } from "./store/reducer";
import { PrivateRoute } from './routes/PrivateRoute'

import GlobalStyle from './styles/global';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" exact component={Home}/>

        <PrivateRoute path="/repositories" component={MyRepositories} />
        <PrivateRoute path="/starred-repositories" component={StarredRepositories} />

      </Switch>
      <GlobalStyle />
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

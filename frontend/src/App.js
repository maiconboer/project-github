import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

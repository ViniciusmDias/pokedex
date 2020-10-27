import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ItemDescription from '../pages/ItemDescription';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:id" exact component={ItemDescription} />
  </BrowserRouter>
);

export default Routes;

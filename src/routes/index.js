import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonDescription from '../pages/PokemonDescription';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:id" exact component={PokemonDescription} />
  </BrowserRouter>
);

export default Routes;

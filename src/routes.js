import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/directors" component={Directors} />
    <Route exact path="/actors" component={Actors} />
    <Route exact path="/movie/:id" component={Movie} />
    <Route component={ErrorPage} />
  </>
);

export default routes;

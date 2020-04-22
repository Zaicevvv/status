import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const OptionsPage = lazy(() =>
  import(
    './components/OptionsPage/OptionsPage' /* webpackChunkName: "options-page" */
  ),
);

const App = () => (
  <Suspense fallback={<h1 style={{ textAlign: 'center' }}>...</h1>}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/all-options" component={OptionsPage} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default App;

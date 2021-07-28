/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragQueens from '../containers/DragQueens';
import QueenDetail from '../components/queens/QueenDetail';
import React from 'react';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}
          render={routerProps => (
            <DragQueens />
          )} />;
        <Route path="/queens/:id" exact={true}
          render={routerProps => (
            <QueenDetail {...routerProps} />
          )} />
      </Switch>
    </Router>
  );
}

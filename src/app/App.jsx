/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragQueens from '../containers/DragQueens';
import Queen from '../components/queens/Queen';
import React from 'react';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" 
          render={routerProps => (
            <DragQueens />
          )} />;
        <Route path="/queens/:id"
          render={routerProps => (
            <Queen {...routerProps} />
          )} />
      </Switch>
    </Router>
  );
}

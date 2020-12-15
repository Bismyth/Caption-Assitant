import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Toolbar />
      <Container>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

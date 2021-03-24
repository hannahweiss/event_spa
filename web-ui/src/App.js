import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Nav from './Nav';
import UsersList from './Users/List';
import UsersNew from './Users/New';
import EventsList from './Events/List';
import EventsNew from './Events/New';

import "./App.scss";

function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <EventsList />
        </Route>
        <Route path="/users" exact>
          <UsersList />
        </Route>
        <Route path="/users/new">
          <UsersNew />
        </Route>
        <Route path="/events/new">
          <EventsNew />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

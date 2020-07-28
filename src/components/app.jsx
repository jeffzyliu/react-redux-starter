import React from 'react';
import {
  BrowserRouter as Router, NavLink, Route, Switch,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };

// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };
//
const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"
            exact
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/controls">Controls</NavLink>
        </li>
        <li>
          <NavLink to="/test/id1">test id1</NavLink>
        </li>
        <li>
          <NavLink to="/test/id2">test id2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Fallback = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact
            path="/"
            component={Counter}
          />
          <Route path="/controls"
            component={Controls}
          />
          <Route exact
            path="/test/:id"
            component={Test}
          />
          <Route component={Fallback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

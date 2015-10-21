import React from 'react/addons';
import { Router, Route, Link } from 'react-router';
import UserContext from './UserContext.js';
import App from './components/App.js';
import Foo from './components/Foo.js';
import Bar from './components/Bar.js';

var context = new UserContext();

function createElement(Component, props) {
  console.log('Create element has been called.');
  props.context = context;

  return <Component {...props} />;
}


var router = (
    <Router createElement={createElement}>
        <Route path="/" component={App}>
          <Route path="/foo/" component={Foo} />
          <Route path="/bar/" component={Bar} />
        </Route>
    </Router>
);

React.render(router, document.getElementById('example'));


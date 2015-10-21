import React from 'react';
import { Router, Route, Link } from 'react-router';
import Foo from './Foo.js';
import Bar from './Bar.js';

class App extends React.Component {
    constructor(props) { 
      super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <ul>
                    <li><Link to="/foo/">Foo</Link></li>
                    <li><Link to="/bar/">Bar</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;

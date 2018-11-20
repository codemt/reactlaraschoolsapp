import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Central from './Central';
import Harbor from './Harbor';
import Western from './Western';
import Thane from './Thane';
 class App extends Component {
  render() {
    return (
        <Router>
             <div>
                     <NavBar />
                    <Route  path='/central' exact strict component={Central}/>
                    <Route  path='/harbor' exact strict component={Harbor}/>
                    <Route  path='/western' exact strict component={Western}/>
                    <Route  path='/thane' exact strict component={Thane}/>
            </div>
        </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
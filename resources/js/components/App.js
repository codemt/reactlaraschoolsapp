import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import { Router, Switch , Route  } from 'react-router-dom';
import Central from './Central';
import Harbor from './Harbor';
import Western from './Western';
import Thane from './Thane';
import HomePageContainer from './HomePage/homePageContainer';
import AddSchool from './Forms/AddSchool/index';
import history from './History';
import Spinner from './Spinners';
 class App extends Component {
  render() {
    return (
        <Router history={history}>
             <div>
                     <NavBar />
                     <Route path='/home' exact strict component={HomePageContainer} />
                    <Route  path='/central' exact strict component={Central}/>
                    <Route  path='/harbor' exact strict component={Harbor}/>
                    <Route  path='/western' exact strict component={Western}/>
                    <Route  path='/thane' exact strict component={Thane}/>
                    <Route  path='/addschool' exact strict component={AddSchool}/>
                    <Route  path='/spinner' exact strict component={Spinner}/>
            </div>
        </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
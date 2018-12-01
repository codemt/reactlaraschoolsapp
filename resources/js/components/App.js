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
import ContentLoader from "react-content-loader"
import EditSchool from './Forms/EditSchool';
 class App extends Component {


  state ={

    loading : true

  }

componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  
  render() {

    const { loading } = this.state;

    // show loader for some time before showing the list of schools
    if(loading) {

        return (

          <div style={{display:'block',margin:'auto',textAlign:'center'}}> 
          <ContentLoader 
                
                  
                   speed={2}
                   style={{width: '100%', height: '100px'}}
                
          >
          <rect y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.5s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.5s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="30" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.25s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.25s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="60" width="15" height="140" rx="6">
          <animate attributeName="height"
               begin="0s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="90" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.25s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.25s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="120" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.5s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.5s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
          </ContentLoader>
          </div>


        )
    }


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
                    <Route  path='/edit/:id' component={EditSchool}/>
            </div>
        </Router>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
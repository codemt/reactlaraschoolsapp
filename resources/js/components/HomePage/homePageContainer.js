import React, { Component } from 'react'
import SchoolsList from './index';
class HomePageContainer extends Component {

    constructor(props){


            super(props);
            this.state = {


                  data : [],  

            }

    }

    componentDidMount(){


            this.getAllSchools();

    }

    getAllSchools(){

        console.log('called');
  
              fetch('api/schools/all')
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson);
              this.setState({data : responseJson,animating:false});
  
            })
            .catch((error) => {
              console.error(error);
            });


    }


  render() {

    return (
      
            <SchoolsList schools={this.state.data} />
      
    )
  }
}
export default HomePageContainer;
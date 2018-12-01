import React, { Component } from 'react'

 class EditSchool extends Component {


    constructor(props){


        super(props);
        this.state = {


          data : [],  

        }

    }



    componentDidMount(){


      this.editSchool();
      console.log('i am loaded');


    }

    editSchool(){

      console.log('called');

            fetch('api/schools/{id}')
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
      <div>
                
        <p> Edit School here </p>
        <br/>

        <p> Edit School </p>

      </div>
    )
  }
}
export default EditSchool;
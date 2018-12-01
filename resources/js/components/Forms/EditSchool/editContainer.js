import React, { Component } from 'react'
import EditForm from './index';

 class EditContainer extends Component {


    constructor(props){


        super(props);
        this.state = {


          data : [],  

        }

    }



    componentDidMount(){


      var id = this.props.match.params.id;
      console.log(this.props.match.params.id);
      this.editSchool(id);
      console.log('i am loaded');


    }

    editSchool(id){

      console.log('called');

            fetch('/api/edit/schools/'+id)
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

        <EditForm   edit={this.state.data} />
        
    )
  }
}
export default EditContainer;
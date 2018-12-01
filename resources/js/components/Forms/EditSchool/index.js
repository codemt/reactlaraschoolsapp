import React, { Component } from 'react'

 class EditSchool extends Component {


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

    const schoolname = this.state.data.school_name;

    const SchoolName = (

      
      <input type="text" onChange={this.handleChange}  className="form-control" name="school_name" aria-describedby="emailHelp" placeholder="Enter School Name"   value={schoolname} />
    

  );

  const SchoolBoard = (

          <div className="form-group">
          <label htmlFor="exampleSelect1">School Board</label>
          <select className="form-control" onChange={this.handleChange}  name="school_board" >
          <option value="SSC">SSC</option>
          <option value="CBSC">CBSC</option>
          <option value="ICSC">ICSC</option>
          <option value="International">International</option>
          </select>
          </div>
  );
  const SchoolAddress = (

      <div className="form-group">
      <label htmlFor="exampleTextarea">School Address</label>
      <textarea className="form-control" onChange={this.handleChange}  name="school_address"  rows="3"></textarea>
      </div>


  );
    
    
    return (


             <div className="container">
                <form>
                <fieldset>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name of School</label>
                {SchoolName}
                <small id="emailHelp" className="form-text text-muted">We'll never share your private data with anyone else.</small>
                </div>
                {SchoolBoard}
                {SchoolAddress}
                <button   onClick={this.submitData} className="btn btn-primary">Submit</button>
                </fieldset>
                </form>

            </div>
    )
  }
}
export default EditSchool;
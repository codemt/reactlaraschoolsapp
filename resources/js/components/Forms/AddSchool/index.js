import React, { Component } from 'react'
import axios from 'axios';
import history from '../../History';
 class AddSchool extends Component {

    constructor(props) {


        super(props);
        this.state = {
        

            school_name : '',
            school_board: '',
            school_address : '',

        };

        this.handleChange = this.handleChange.bind(this);
       // this.submitData = this.submitData.bind(this);
    }

    handleChange(e){

      
        e.preventDefault();
        // Set State , and log new value of state.
        this.setState({ [e.target.name]: e.target.value }, () => {

          console.log("School Name is:", this.state.school_name);
          console.log("School Board  is :", this.state.school_board);
          console.log("School Address is :", this.state.school_address);
         

        });
  
        
        
    }
    submitData =(e) => {


        e.preventDefault();  
       // console.log(e);  
        console.log(this.state.school_address);

        axios.post('/api/schools/create', {
          headers: {
            'content-type': 'application/json',
          },
          school_name: this.state.school_name,
          school_board: this.state.school_board,
          school_address : this.state.school_address,
          
        },)
        .then(function (response) {



          console.log(response);
             setTimeout(() => {
            // return <img alt="loader"  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
            // window.location = "/home";
            history.push('/');


            },1000)
         // return <Redirect to='/inquiries' />
            })
        .catch(function (error) {
          console.log(error);
          alert('some error Occured');
        });
       
          

  }
  
  render() {
    const SchoolName = (

      
        <input type="text" onChange={this.handleChange}  className="form-control" name="school_name" aria-describedby="emailHelp" placeholder="Enter School Name" />
      

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
export default AddSchool;
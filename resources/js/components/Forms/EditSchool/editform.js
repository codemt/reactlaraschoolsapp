import React, { Component } from 'react'
import history from '../../History';
class EditForm extends Component {



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
  navigate(e){

      e.preventDefault();

      history.push('/');

  }


  render() {



    const SchoolId = (

      
      <input type="hidden"  className="form-control" name="school_id" aria-describedby="emailHelp"   value={this.props.edit.id} />
    

  );
    const SchoolName = (

      
      <input type="text" onChange={this.handleChange}  className="form-control" name="school_name" aria-describedby="emailHelp" placeholder="Enter School Name"   value={this.props.edit.school_name} />
    

  );

  const SchoolBoard = (

          <div className="form-group">
          <label htmlFor="exampleSelect1">School Board</label>
          <select className="form-control" onChange={this.handleChange} name="school_board" >
          <option value={this.props.edit.school_board}>{this.props.edit.school_board}</option>
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
      <textarea className="form-control" onChange={this.handleChange}  name="school_address" value={this.props.edit.school_address}  rows="3"></textarea>
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
                {SchoolId}
                {SchoolBoard}
                {SchoolAddress}
                <div class="row">
                <button   onClick={this.submitData} className="btn btn-primary col-md-3" style={{marginRight:10}}>Submit</button>  
                <button   onClick={this.navigate} className="btn btn-primary col-md-3">Back</button>
                </div>
                </fieldset>
                </form>

     </div>
    )
  }
}
export default EditForm;
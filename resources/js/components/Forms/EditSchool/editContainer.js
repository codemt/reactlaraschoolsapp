import React, { Component } from 'react'
import history from '../../History';
 class EditContainer extends Component {


    constructor(props){


        super(props);
        this.state = {


          data : [], 
          school_id : '',
          school_name : '',
          school_board: '',
          school_address : '', 


        }
        this.handleChange = this.handleChange.bind(this);

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
            this.setState({ 

              school_id : this.state.data.id,
              school_name : this.state.data.school_name,
              school_board : this.state.data.school_board,
              school_address : this.state.data.school_address
    
    
           });

          })
          .catch((error) => {
            console.error(error);
          });

        

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


    // const school_name = this.state.school_name;
    // const school_address = this.state.school_address;
    // console.log("School Adddress is " +school_address);
    // console.log("School Name is " +school_name);
    
    const SchoolId = (

      
      <input type="hidden"  className="form-control" name="school_id" aria-describedby="emailHelp"   value={this.state.school_id} />
    

  );
    const SchoolName = (

      
      <input type="text" onChange={this.handleChange}  className="form-control" name="school_name" aria-describedby="emailHelp" placeholder="Enter School Name"   value={this.state.school_name}>
      </input>
    

  );

  const SchoolBoard = (

          <div className="form-group">
          <label htmlFor="exampleSelect1">School Board</label>
          <select className="form-control" onChange={this.handleChange} name="school_board" >
          <option value={this.state.school_board}>{this.state.school_board}</option>
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
      <textarea className="form-control" onChange={this.handleChange}  name="school_address" value={this.state.school_address}  rows="3">{this.state.school_address}</textarea>
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
export default EditContainer;
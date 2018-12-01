import React, { Component } from 'react'

class EditForm extends Component {
  render() {


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
                {SchoolBoard}
                {SchoolAddress}
                <button   onClick={this.submitData} className="btn btn-primary">Submit</button>
                </fieldset>
                </form>

     </div>
    )
  }
}
export default EditForm;
import React, { Component } from 'react'
 class AddSchool extends Component {
  render() {
    return (


        <div className="container">
                <form>
                <fieldset>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name of School</label>
                    <input type="email" class="form-control" name="school_name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter School Name" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your private data with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleSelect1">School Board</label>
                    <select class="form-control"  id="school_board">
                    <option value="SSC">SSC</option>
                    <option value="CBSC">CBSC</option>
                    <option value="ICSC">ICSC</option>
                    <option value="International">International</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleTextarea">School Address</label>
                    <textarea class="form-control" name="school_address" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
                </form>
         </div>
    )
  }
}
export default AddSchool;
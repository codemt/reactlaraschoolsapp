import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class SchoolsList extends Component {

  render() {
    return (
        <div class="container"> 
                <div class="row">
                    <div class="col-md-6">
                        <h1> List of Schools </h1> 
                    </div>
                    <div class="col-md-6">
                    <Link   to='/addschool' class="btn btn-secondary">Add School</Link>
                    </div>
                </div>
                    
                    <div className="list-group">
                        {this.props.schools.map(schools => 
                            
                                <a href={schools.id} className="list-group-item list-group-item-action">
                                    {schools.school_name}
                                </a>
                        
                        
                        )}        
                </div>

    </div>
    
    )
  }

}
export default SchoolsList;
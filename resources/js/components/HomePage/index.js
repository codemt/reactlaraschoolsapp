import React, { Component } from 'react'

 class SchoolsList extends Component {

  render() {
    return (
        <div class="container"> 
                    <h1> List of Schools </h1>
                    <div className="list-group">
                        {this.props.schools.map(schools => 
                            
                                <a href="#" className="list-group-item list-group-item-action">
                                    {schools.school_name}
                                </a>
                        
                        
                        )}        
                </div>

    </div>
    
    )
  }

}
export default SchoolsList;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Spinners/logo.svg';
import { Pagination } from 'react-js-pagination';
import Spinner from '../Spinners/index';
import { Facebook } from 'react-content-loader'
 class SchoolsList extends Component {

   
    state ={

        loading : true

    }

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ loading: false }), 1500);
      }
      


  render() {
   
    const { loading } = this.state;

    // show loader for some time before showing the list of schools
    if(loading) {
        return <Facebook />; 
    }
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
                    <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">School Name</th>
                        <th scope="col">School Address</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.schools.map(schools => 
                            
                        <tr>
                            <td>
                             <a  href={schools.id}>  {schools.school_name} </a> 
                            </td>
                            <td> {schools.school_address} </td>
                         </tr>
                        
                    )} 
                    </tbody>                            
                    </table>     
                    
                     </div>
                    
    </div>
    
    )
  }

}
export default SchoolsList;
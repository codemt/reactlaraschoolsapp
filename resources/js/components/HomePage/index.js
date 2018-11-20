import React, { Component } from 'react'
class HomePage extends Component {
  render() {
    return (
      
            <div class="container"> 
                { /*  
                <div class="jumbotron">
                        <h1 class="display-3">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                </div>
                */}
                <h1> List of Schools </h1>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        School Name 1 
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">School Name 2
                    </a>
                    <a href="#" class="list-group-item list-group-item-action disabled">School Name 3
                    </a>
                </div>
            </div>
      
    )
  }
}
export default HomePage;
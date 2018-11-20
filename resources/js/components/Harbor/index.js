import React, { Component } from 'react'

 class Harbor extends Component {
  render() {
    return (
        <div className="container">
        <div className="card mb-3">
        <h3 className="card-header">School Name 2</h3>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <img style={{display:'block'}} src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Larkmead_School%2C_Abingdon%2C_Oxfordshire.png' alt="Card image" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        { /* 
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
        */}
      </div>
      </div>
    )
  }
}
export default Harbor;
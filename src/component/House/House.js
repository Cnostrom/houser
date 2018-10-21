import React, { Component } from 'react';
import './House.css';
import {connect} from 'react-redux';

class House extends Component {

  displayListing = () => {
    const house = this.props.houseListings.map(i => {
      return(
        <div className='displayBox'>
        <p>Property Name:{i.name}</p>
        <p>Address:{i.name}</p>
        <p>City:{i.city}</p>
        <p>Zip:{i.Zip}</p>
        </div>

      )
    })
    return (
      <div>
      {house}

      </div>

    )
  }

  render() {
    return (
      <div className='House'> 
        <h1>House </h1>
        {this.displayListing()}
      </div>
    
    )
  }

}
const mapStateToProps = (state) => {
  return {
    houseListings: state.houseListings
  }
}

export default connect (mapStateToProps)(House);
import React, { Component } from 'react';
import House from '../House/House';
import './Dashboard.css';

class Dashboard extends Component {
  handlClick = () => {
    this.props.history.push('./Wizard')
  }


  render() {
    return(
      <div className='Dashboard'>
      <h1 className='dash'>Dashboard
      <button onClick={this.handlClick}>Add New Property</button></h1>
      
      <br/>
      <p className='homeTitle'> Home Listings</p>
      <House/>
      </div>
      
      
    )
}
}
export default Dashboard;
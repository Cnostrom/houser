import React, { Component } from 'react';
import './Wizard.css';



class Wizard extends Component {
state = {
  name:'',
  address:'',
  city:'',
  state:'',
  zip:''
};

onChangeName = (e) =>{
this.setState({name:e.target.value})
}
onChangeAddress = (e) =>{
  this.setState({address:e.target.value})
}
onChangeCity = (e) =>{
  this.setState({city:e.target.value})
}
onchangeZip = (e) =>{
  this.setState({zip:e.target.value})
}

  render() {
    return(
      <div className='Wizard'>
      <div className='listing'>
       <h1>Add New Listing </h1>
       <button className='cancel'>Cancel</button>
       </div>
       <div className='inputs'>
       <p>Property Name</p>
       <input value = {this.state.name} onChange = {this.onChangeName} className='propertyName'></input>
       <p>Address</p>
       <input value = {this.state.address} onChange = {this.onChangeAddress} className='address'></input>
       <div className='location'>
       <p>City</p>
       <input value = {this.state.city} onChange = {this.onChangeCity} className='city'></input>
       <p>State</p>
       <input className='state'></input>
       <p>Zip</p>
       <input value = {this.state.zip} onChange = {this.onchangeZip} className='zip'></input>
       <div>
      <button className='complete'>Complete</button>


        </div>
        </div>
       </div>
      </div>
      
      
    )
}
}

export default Wizard;
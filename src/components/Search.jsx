import React, { Component } from 'react'

export default class Search extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    const {handleChange} = this.props
    return (
      <div>
        <h1>Calorie Tracker</h1>
        <input type="text" className='searchInput' placeholder='Enter food name...' onChange={handleChange}  />
      </div>
    )
  }
}

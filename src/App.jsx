import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import FoodData from "/resources/FoodData.js";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
         search: e.target.value 
        }
        );
        // console.log(this.state.search);
  };

  
  render() {
   const  FilteredFood = FoodData.filter((food) => {
      return food.name.toLowerCase().includes(this.state.search.toLowerCase())
      })
    
    return (
      <>
        <Search handleChange={this.handleChange}/>
        {/* <FoodBox data={FoodData} /> */}
        
        {
        FilteredFood.map((food)=>{
          return <FoodBox key={food.id} food={food}/>
        })
        }
        
      </>
    );
  }
}

export default App;

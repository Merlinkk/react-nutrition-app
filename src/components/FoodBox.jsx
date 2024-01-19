import React, { Component } from 'react'

export default class FoodBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    this.setState({ quantity: newQuantity });
  };

  resetCount = () => {
    this.setState({ quantity: 0 });
  }

  incrementCount = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    document.querySelector(".input").value = this.state.quantity+1;
  }

  render() {
    const {food} = this.props
    const id = food.id
    const img = food.img
    const name = food.name
    const cal = food.cal
    
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img className='foodImg' src={img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{cal} Cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" onChange={this.handleQuantityChange} type="number"  />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.incrementCount}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className='countBox'>
            <div className='info'>
              {this.state.quantity} {name} = {this.state.quantity * cal} Cal 
            </div>
            <button className='resetButton'  onClick={this.resetCount}> Reset </button>
        </div>

      </div>
    )
  }
}

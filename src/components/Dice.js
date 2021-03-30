import React, { Component } from 'react'
import '../assets/css/Dice.css'

export default class Dice extends Component {
  state = {
    imgSrc: `/img/dice${this.getRandom()}.png` 
  }

  getRandom() {
    return Math.floor(Math.random() * (6 - 1 +1)) + 1;
  }

  changeDiceImg = () => {
    this.setState({imgSrc: "/img/dice-empty.png"});
    setTimeout(() => {
      this.setState({imgSrc: `/img/dice${this.getRandom()}.png`});
    }, 1000);
  }

  render() {
    return (
      <div className='img__box'>
        <img onClick={this.changeDiceImg} src={this.state.imgSrc} style={{width: 100}}/>
      </div>
    )
  }
}


import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            age: 9000
        }
    }

    

    ageByOne = () => {
        this.setState({age: this.state.age + 1})
    }


  render() {
    return (
      <div>
        {this.props.age}

    

        <h1>{this.state.age}</h1>
        <button onClick={()=>{this.props.x()}}>Happy Birthday</button>
      </div>
    )
  }
}

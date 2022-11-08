import React, { Component } from 'react'
import  Nav from './Nav';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      post: [],
      name: 'Shoha',
      age: 9000
      }

    console.log('construction is done')
  }

  componentDidMount = () => {
    console.log('first rendering is completed (MOUNTED!!!!)')
  }

  methodNumber3() {
    return 'do something'
  }

  happyBirthday = () =>  {
    console.log('button is clicked')
    this.setState({age: this.state.age + 1})
  }

  

  render() {
    console.log('rendering is about to happen')
    return (
      <div>
        <Nav/>


        <h1>Hello</h1>
        <h3>The name is {this.state['name']}: {this.state.age} </h3>
        <button onClick={this.happyBirthday} >Add to age +</button>

      </div>
    )
  }
}

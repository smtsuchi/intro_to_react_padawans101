import React, { Component } from 'react'
import  Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import News from './views/News';
import IG from './views/IG';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      name: 'Shoha',
      age: 9001
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

      <Router>
        <div>
          <Nav/>
          
          <Routes>

            <Route path='/' element={<Home age={this.state.age} x={this.happyBirthday}/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup'/>
            <Route path='/feed' element={<IG />}/>
            <Route path='/news' element={<News />}/>

          </Routes>

          <Footer />
          
        </div>
      </Router>
    )
  }
}

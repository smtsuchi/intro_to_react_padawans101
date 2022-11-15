import React, { Component } from 'react'
import  Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import News from './views/News';
import IG from './views/IG';
import SignUp from './views/SignUp';
import CreatePost from './views/CreatePost';
import IndividualPost from './views/IndividualPost';
import UpdatePost from './views/UpdatePost';
import Shop from './views/Shop';
import Cart from './views/Cart';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      name: 'Shoha',
      age: 9001,
      message: {},
      cart: []
      }

    console.log('construction is done')
  }

  addToCart = (product) => {
    this.setState({cart: [...this.state.cart, product]})
  };

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  };
  logMeOut = () => {
    this.setState({
      user: {}
    })
  };

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  };

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
          <Nav user={this.state.user} logMeOut={this.logMeOut} cart={this.state.cart}/>
          <p className={`bg-${this.state.message.category}`}>{this.state.message.message}</p>
          
          <Routes>

            <Route path='/' element={<Home age={this.state.age} x={this.happyBirthday}/>}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage}/>}/>
            <Route path='/signup'element={<SignUp addMessage={this.addMessage}/>}/>
            <Route path='/feed' element={<IG />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/posts/create' element={<CreatePost user={this.state.user}/>}/>
            <Route path='/posts/:postId'element={<IndividualPost user={this.state.user}/>}/>
            <Route path='/posts/update/:postId'element={<UpdatePost user={this.state.user}/>}/>
            <Route path='/shop' element={<Shop addToCart={this.addToCart}/>}/>
            <Route path='/cart' element={<Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>} />
          </Routes>

          <Footer />
          
        </div>
      </Router>
    )
  }
}

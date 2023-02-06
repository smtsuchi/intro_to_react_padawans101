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
import LoginRequired from './components/LoginRequired';
import ThemeProvider from './context/ThemeContext';
import { withContext } from './hocs';

class App extends Component {
  constructor(){
    super();

    
    
    const foundUser = localStorage.getItem('user')
    if (foundUser){
      this.state = {
        user: JSON.parse(foundUser),
        name: 'Shoha',
        age: 9001,
        message: {},
        cart: []
        }
    }
    else{
      this.state = {
        user: {},
        name: 'Shoha',
        age: 9001,
        message: {},
        cart: []
        }
    }


    

    console.log('construction is done')
  }


  addToCart = async (product) => {
    this.setState({cart: [...this.state.cart, product]})
    if (this.state.user.token){
      const res = await fetch('http://localhost:5000/api/cart/add', {
        method: "POST",
        body: JSON.stringify({'product_id': product.id}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.state.user.token}`
        }
      });
      const data = await res.json();
      console.log(data)
    }
  };
  removeFromCart = async (product) => {
    const newCart = [...this.state.cart];
    for (let i = newCart.length-1; i>=0; i--){
      if (product.id === newCart[i].id) {
        newCart.splice(i, 1)
        break
      }
    }
    this.setState({cart: newCart})
    if (this.state.user.token){
      const res = await fetch('http://localhost:5000/api/cart/remove',{
        method: "POST",
        body:JSON.stringify({'product_id':product.id}),
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.state.user.token}`
        }
      });
      const data = await res.json();
      console.log(data)
    }
  };
  getCart = async (user) => {
    const res = await fetch('http://localhost:5000/api/cart', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    });
    const data = await res.json();
    console.log(data)
    if (data.status==='ok'){
      this.setState({cart:data.cart})
    }
  }

  logMeIn = (user) => {
    localStorage.setItem('user', JSON.stringify(user))

    this.setState({
      user: user
    })
    
    this.getCart(user)
  };
  logMeOut = () => {
    this.setState({
      user: {},
      cart: []
    })

    localStorage.removeItem('user')
  };

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  };

  componentDidMount = async() => {
    console.log('hi')
    console.log(this.props.appContext)
    console.log('hi2')
    if (this.state.user.token){
      this.getCart(this.state.user)
    }
    
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
      <ThemeProvider>
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
            <Route path='/posts/create' element={<LoginRequired user={this.state.user}><CreatePost user={this.state.user}/></LoginRequired>}/>
            <Route path='/posts/:postId'element={<IndividualPost user={this.state.user}/>}/>
            <Route path='/posts/update/:postId'element={<LoginRequired user={this.state.user}><UpdatePost user={this.state.user}/></LoginRequired>}/>
            <Route path='/shop' element={<Shop addToCart={this.addToCart}/>}/>
            <Route path='/cart' element={<Cart cart={this.state.cart} removeFromCart={this.removeFromCart}/>} />
          </Routes>

          <Footer />
          
        </div>
      </Router>
      </ThemeProvider>
    )
  }
}
export default withContext(App);
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'

export default class Nav extends Component {

    getTotal = (cart) => {
        let total = 0;
        for (let item of cart) {
            // console.log(item)
            total = total + parseFloat(item.price)
            // console.log(total)
        }
        return total.toFixed(2)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/feed">IG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            
                            
                            {this.props.user.username?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts/create" >Create Post</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login" onClick={()=>{this.props.logMeOut()}}>Log Out</Link>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link" >Hello, {this.props.user.username}</p>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </li>
                            </>
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <BsCart /> {this.props.cart.length} | {this.getTotal(this.props.cart)}
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}





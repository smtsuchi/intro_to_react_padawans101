import React, { Component } from 'react'

export default class Login extends Component {

  sendLoginInfo = async (e) => {
      e.preventDefault();

      const username = e.target.username.value
      const password = e.target.password.value

      const res = await fetch('http://localhost:5000/api/login', {
          method: "POST",
          body: JSON.stringify({
              username: username,
              password: password
          }),
          headers: {
              "Content-Type": 'application/json'
          }
      });
      const data = await res.json();
      if (data.status==='ok'){
        // show msg
        this.props.addMessage(data.message, 'success')
        // log me in (this will also come from App.js level state)
        this.props.logMeIn(data.user)
        // #redirect
      }
      console.log(data)
  }

  sendBasicAuthInfo = async (e) => {
    e.preventDefault();

    const username = e.target.username.value
    const password = e.target.password.value

    const res = await fetch('http://localhost:5000/api/token', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            'Authorization': `Basic ${btoa(username+":"+password)}`
        }
    });
    const data = await res.json();
    if (data.status==='ok'){
      // show msg
      this.props.addMessage(data.message, 'success')
      // log me in (this will also come from App.js level state)
      this.props.logMeIn(data.user)
      // #redirect
    }
    console.log(data)
};

  render() {
      return (
          <div>
              <h1>Log In</h1>
              <form onSubmit={(e) => { this.sendBasicAuthInfo(e) }}>
                  <input placeholder='Username' name='username' className='form-control' type='text' />
                  <input placeholder='Password' name='password' className='form-control' type='password' />
                  <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
          </div>
      )
  }
}

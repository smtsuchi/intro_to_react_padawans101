import React, { Component } from 'react'

export default class Post extends Component {
    
  render() {
    const post = this.props.p
    return (
        <a className="card text-decoration-none text-dark" style={{width: '18rem'}} href="{ url_for('ig.viewSinglePost', post_id=post.id) }">
        <img src={ post.img_url } className="card-img-top" alt={ post.title }/>
        <div className="card-body">
          <h5 className="card-title">{ post.title }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ post.author }</h6>
          <p className="card-text">{ post.caption }</p>
          
        </div>
    </a>
    )
  }
}

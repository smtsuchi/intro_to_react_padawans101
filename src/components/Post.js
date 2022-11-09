import React, { Component } from 'react'

export default class Post extends Component {
    
  render() {
    const post = this.props.p
    return (
        <a class="card text-decoration-none text-dark" style={{width: '18rem'}} href="{ url_for('ig.viewSinglePost', post_id=post.id) }">
        <img src={ post.img_url } class="card-img-top" alt={ post.title }/>
        <div class="card-body">
          <h5 class="card-title">{ post.title }</h5>
          <h6 class="card-subtitle mb-2 text-muted">{ post.author }</h6>
          <p class="card-text">{ post.caption }</p>
          
        </div>
    </a>
    )
  }
}

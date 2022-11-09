import React, { Component } from 'react'

export default class Article extends Component {

    
    render() {
        const a = this.props.article
        return (
            <div class="card" style={{width: '18rem'}}>
                <img src={a.urlToImage} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{a.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{a.source.name} - {a.author}</h6>
                    <p class="card-text">{a.description}</p>
                    <a href={a.url} target='_blank' class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

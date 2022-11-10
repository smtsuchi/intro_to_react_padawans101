import React, { Component } from 'react'

export default class Article extends Component {

    
    render() {
        const a = this.props.article
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={a.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{a.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{a.source.name} - {a.author}</h6>
                    <p className="card-text">{a.description}</p>
                    <a href={a.url} target='_blank' className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

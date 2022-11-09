import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=10')
        const data = await res.json()
        const my_articles = data.articles
        this.setState({articles: my_articles})
    }

    newsSearch = async (e) => {
        e.preventDefault();
        const input = e.target.news.value


        const res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=10`)
        const data = await res.json()
        const my_articles = data.articles
        this.setState({articles: my_articles})
    }

    render() {
        return (
            <>
                <form onSubmit={(e)=>{this.newsSearch(e)}}>
                    <input name='news' placeholder='Search for news..'/>
                    <button type='submit'>Search</button>
                </form>
                <div className='row'>
                    {this.state.articles.map(a => <Article article={a}/>)}
                </div>
            </>
        )
    }
}

import React, { Component } from 'react';

class QuoteBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '"Whatever the mind of man can conceive and believe, it can achieve."',
            author: "Napoleon Hill",
            tweetURL: 'https://twitter.com/intent/tweet?text="Whatever the mind of man can conceive and believe, it can achieve." - Napoleon Hill'
        };
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote() {
        fetch("https://api.quotable.io/random")
        .then( response =>  response.json() )
        .then( data => {
            this.setState(
                {text: '"' + data.content + '"',
                 author: data.author,
                 tweetURL: 'https://twitter.com/intent/tweet?text="' + data.content + '" - ' + data.author
                }
            );
        })
    }

    render() {
        return (
            <div id="container">
                <div id="quote-box">
                    <h1>Quote of the Day</h1>
                    <div id="quote-wrapper">
                        <p id="text">{this.state.text}</p>
                        <p id="author">-{this.state.author}</p>
                    </div>
                    <div id="button-wrapper">
                        <button id="tweet-quote" href={this.state.tweetURL} className="twitter-share-button" target="_blank" rel="noreferrer noopener">
                            <i className="fa fa-twitter"></i>
                        </button>
                        <button id="new-quote" onClick={this.newQuote}>New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuoteBox;

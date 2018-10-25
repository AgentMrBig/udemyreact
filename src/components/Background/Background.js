import React, { Component } from 'react';

export default class Background extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
        fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=8OG92RBF0H8VK297')
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded: true,
              items: json
    
            })
        this.setState(items);
        console.log("state", items);
    });
    

}
}




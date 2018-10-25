import React from 'react';


/*
  Welcome to Alpha Vantage! Here is your 
  API key: 8OG92RBF0H8VK297 
  Please record this API key for future access to Alpha Vantage.
  https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=8OG92RBF0H8VK297
*/

export default class AlphaVantage extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          alphAdvantageApi: 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=8OG92RBF0H8VK297',
          items: {},
          isLoaded: false,
          k_from_currency_code: '1. From_Currency Code',
          k_from_currency_name: '2. From_Currency Name',
          k_to_currency_code:'3. To_Currency Code',
          k_to_currency_name:'4. To_Currency Name',
          k_ex_rate: '5. Exchange Rate',
          k_last_refresh: '6. Last Refreshed',
          k_time_zone: '7. Time Zone',
          
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
          });
    
      }

      render() {
        let { isLoaded, items } = this.state;
        //let test = JSON.stringify(items, null, 4);
        
        
    
        if(!this.isLoaded){
            {console.log("Did it load?", this.items)}
          return <div>Now loading...</div>
          
        }
        else
        {
          let innerKey = Object.keys(this.items["Realtime Currency Exchange Rate"]);
          let fxTopKey = 'Realtime Currency Exchange Rate';
          let fxObj = this.items[this.mainKey]
          let trimFxRate = parseFloat(fxObj[this.state.k_ex_rate]);
          return(
            <div style = {style}>
                <h2>Data is Loaded!</h2>
                <h3>From AlphaVantage</h3>
                Currency: {fxObj[this.state.k_from_currency_code]}/{fxObj[this.state.k_to_currency_code]}
                <br></br>
                Exchange Rate: {trimFxRate.toFixed(3)}
 
                {console.log("Testing", fxObj[this.state.k_from_currency_name])}

            </div>
          );
        }
          const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
          };
    
          
        }
}


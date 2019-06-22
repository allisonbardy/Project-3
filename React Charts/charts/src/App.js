import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: props.chartData
    }
  }
ComponentWillMount()  {
  this.getChartData();

}

  getChartData()  {
    this.setState({ 
      chartData:{
        labels: ['1','2','3','4'],
        datasets: [
          {
            label: 'Population',
            data:[
              1,2,3,4,5
            ]
          }
        ]

      
    }
  })}
  render()  {
    return(
      <div className="App">
        <div className="App-header">
          <img src= {logo}  className="App-logo"
          alt = "logo" />
          <h2> Your React App!</h2>
        </div>
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      </div>
    )
  }
}
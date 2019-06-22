import React, {Component} from 'react';

import {pie, Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor()   {
        super(props);
        this.state= {
            chartData:  {
            labels:[],
            datasets:[
                {
                    labels: 'Population',
                    data:   [

                    ],
                    backgroundColor:    [

                    ]
                }
            ]
            }
        }
    }
static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location:'City'
    }
    render()    {
        return(
            <div className="chart">
                <Pie
                data={this.state.chartData}
                options= {{
                    title:{
                        display: this.props.displayTitle,
                        text: 'Largest Cities In ' +this.props.location,
                        fontSize: 25
                    },
                    legend: {
                        display:this.props.displayLegend,
                        position:this.props.legendPosition

                    }
                }}
                />
            </div>
        )
    }
}

export default App
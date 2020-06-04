import React,{Component} from 'react'
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#C2A3D7',
          '#75BAC3',
          '#63D88C',
          '#484C80',
          '#C77F8B'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

class DoghnutChart extends Component{
  render(){
      return(
          <div>
                <Doughnut
                    data={state}
                    options={{
                        title:{
                        // display:true,
                        // text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />
                        
          </div>
      )
  }
}
export default DoghnutChart


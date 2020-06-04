import React,{Component} from 'react'
import { Pie } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#384494',
          '#4858BE',
          '#13285C',
          '#2750B8',
          '#7D96D4'
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

class PieChart extends Component{
  render(){
      return(
          <div>
                <Pie
                    data={state}
                    options={{
                        title:{
                        // display:true,
                        // text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'left'
                        }
                    }}
                />       
          </div>
      )
  }
}
export default PieChart


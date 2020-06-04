import React,{Component} from 'react'
import classes from './Charts.css'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PieChart from './PieChart'
import DoghnutChart from './DoghnutChart'
import BarChart from './BarChart'


class Charts extends Component{
    render(){
        return(
            <div>
                <Grid>
                    
                    <Grid container>
                        <Grid item lg={12}>
                            <Paper>
                            <br/>
                            <div className={classes.Typography}>
                                <h1>Pie Chart</h1>
                            </div>
                            <br/>
                                <PieChart/>
                                <br/><br/>
                            </Paper>
                        </Grid>
                    </Grid>
                    
                    <Grid container lg={12}>
                        
                        <Grid item lg={12}>
                            <Paper>
                            <br/><br/>
                            <div className={classes.Typography}>
                                <h1>Bar Chart</h1>
                            </div>
                            <br/><br/>
                                <BarChart/>
                                <br/><br/>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container lg={12}>
                        <Grid item lg={12}>
                            <Paper>
                            <br/><br/>
                                <div className={classes.Typography}>
                                    <h1>Doghnut Chart</h1>
                                </div>
                                <br/><br/>
                                <DoghnutChart/>
                                <br/><br/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
export default Charts


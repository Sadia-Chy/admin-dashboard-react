import React,{Component} from 'react'
import classes from './Layout.css'
import SideBar from '../Navigation/SideBar/SideBar'
import TopBar from '../Navigation/TopBar/TopBar'
// import {AccountBalanceOutlinedIcon} from '@material-ui/icons/AccountBalanceOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Layout extends Component{
    render(){
        return(
            <div>
                <TopBar/>

                <Grid container spacing={2} item lg={12}>
                    <Grid item lg={2}>
                        <SideBar/>
                    </Grid>
                    
                    <Grid item lg={10}>
                        
                            <div className={classes.Content}>
                                    {this.props.children}
                            </div>
                        
                    </Grid>
                  
                </Grid>
                
                <Grid item lg={12}>
                    <Paper>xs=6 sm=3</Paper>
                </Grid>
               
                
            </div>
        )
    }
}
export default Layout
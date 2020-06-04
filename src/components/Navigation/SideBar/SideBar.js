import React,{Component} from 'react'
import classes from './SideBar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Avatar from '@material-ui/core/Avatar';

class SideBar extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav className={classes.SideBar}>
                        <div className={classes.avatar}>
                        <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIyLZAn0vi7AXcYjU2rZkPn1UbhMRqKPut7M4rIyWpppESy7Oy&usqp=CAU" />
                        </div>
                        <p style={{color:"orange", marginLeft:"31%" }}>Sanjida</p>
                        {/* <br/> */}
                        <NavigationItems/>
                    </nav>
                </header>

            </div>
        )
    }
}
export default SideBar
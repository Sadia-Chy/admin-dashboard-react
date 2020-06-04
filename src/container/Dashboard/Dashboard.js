import React,{Component} from 'react'
import classes from './Dashboard.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Modal from '@material-ui/core/Modal';
import Tooltip from '@material-ui/core/Tooltip';


import PieChart from '../Charts/PieChart'
import DoghnutChart from '../Charts/DoghnutChart'
import BarChart from '../Charts/BarChart'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image1 from '../../image/1.jpg'
import image2 from '../../image/2.jpg'
import image3 from '../../image/3.jpg'
import image4 from '../../image/4.jpg'
import image5 from '../../image/5.jpg'
import image6 from '../../image/6.jpg'
import image7 from '../../image/7.jpg'
import image8 from '../../image/8.jpg'
import image9 from '../../image/9.jpg'
import image10 from '../../image/10.jpg'
import image11 from '../../image/11.jpg'

import Clock from 'react-clock';

class Dashboard extends Component{
    state={
        open:false,
        open1:false,
        open2:false,
        time: new Date()

    }
     
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          time: new Date()
        });
      }
    openmodalHandler=()=>{
        this.setState({ open:true })
    }
    openmodalHandler1=()=>{
        this.setState({ open1:true })
    }
    openmodalHandler2=()=>{
        this.setState({ open2:true })
    }

    closeModal = () =>{
        this.setState({ open:false })
    }
    closeModal1 = () =>{
        this.setState({ open1:false })
    }
    closeModal2 = () =>{
        this.setState({ open2:false })
    }
    
    render(){
        const tileData = [
               {
                 img: image1,
                 title: 'image',
                 author: 'SSSS',
              },
              {
                img: image4,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image2,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image8,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image9,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image6,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image7,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image11,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image5,
                title: 'image',
                author: 'SSSS',
             },
             {
                img: image10,
                title: 'image',
                author: 'SSSS',
             },
             
            ]
        
        return(
            <div>
                <Grid container spacing={2} item lg={12}>
                        <Grid item lg={4}>
                        <br/><br/><br/><br/>
                            <Paper>
                                <DoghnutChart/>
                            </Paper>
                        </Grid>
                        <Grid item lg={4}>
                        <br/><br/><br/><br/>
                                <Paper>
                                    <BarChart/>
                                </Paper>
                        </Grid>
                        <Grid item lg={4}>
                        <br/><br/><br/><br/>
                                <Paper>
                                <PieChart/>
                                </Paper>
                        </Grid>
                </Grid>

                {/* <Grid container spacing={2} item lg={12}>
                <div>
                        <h1>$USD</h1>
                    </div>
                </Grid>
                
            <Grid container spacing={2} item lg={12}>
                
                <Grid container alignItems="center" lg={4} className={classes.divider}>
                    
                   <Card>
                   <div className={classes.divider2}>
                       <CardContent  >                 
                            <h2>89 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99 </h2>

                            <div  className={classes.divider1}></div>
                       </CardContent>
                       </div>

                   </Card>

                   &nbsp;&nbsp;&nbsp;

                   <Card>
                   
                       <CardContent  >                 
                            <h2>89 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 99 </h2>

                            <div  className={classes.divider1}></div>
                       </CardContent>

                   </Card>
                </Grid>
                </Grid>
                <br/><br/>
                <Grid lg={12} className={classes.con}>
                            <div><h1 className={classes.con1}></h1></div>
                            <div><h1 className={classes.con2}></h1></div>

                </Grid> */}

                <br/><br/>
                {/* <Grid container spacing={2} item lg={12}>
                    <div>
                        <h1>CARD</h1>
                    </div>
                </Grid> */}
                <Grid container item lg={12}>
                    <Grid item lg={4}>
                    
                        {/* <Clock
                            value={this.state.date}
                            /> */}
                        <Card className={classes.borderimage}>
                          
                          {/* <CardHeader
                          avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                              10
                            </Avatar>
                          }
                          title="November"
                          subheader="Monday, 2016"
                          />
                          <CardMedia
                          className={classes.media1}
                          image="https://cdn.dribbble.com/users/61627/screenshots/3071832/lindvestclock.gif"
                                
                          /> */}
                          <p className={classes.headertitle}> {this.state.time.toLocaleTimeString()}</p>
                           
                        </Card>
                    </Grid>
                    <Grid item lg={1}>

                    </Grid>
                    <Grid item lg={7}>
                        <div className={classes.gridlistdiv}>
                            <GridList className={classes.gridList} cols={2}>
                                {tileData.map((tile) => (
                                <GridListTile key={tile.img} cols={tile.cols}>
                                    <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </Grid>
                </Grid>
                <br/> <br/> <br/> <br/>
                <Grid container spacing={2} item lg={12}>
                    <Grid item lg={4}>
                        <Card>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="Butterfly In Rainbow"
                                subheader="September 14, 2016"
                                header="click for details"
                            />
                        
                            <CardMedia
                                className={classes.media}
                                image="https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg"
                                
                                title="CLICK THE IMAGE FOR FULL VIEW"
                                onClick={this.openmodalHandler}
                            />
                            <Modal
                                className={classes.modal}
                                open={this.state.open}
                                onClose={this.closeModal}
                                BackdropProps={{
                                    classes: {
                                    root: classes.backdrop,
                                    }
                                }}
                            >
                                <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg" width="900" height="400"/>
                            </Modal>
                        </Card>
                   
                </Grid>

                <Grid item lg={4}>
                    <Card>
                        <CardHeader
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Flower In Purple"
                            subheader="September 14, 2016"
                           />
                        <CardMedia
                            className={classes.media}
                            image="https://cdn.pixabay.com/photo/2016/09/10/17/09/herbstaster-1659701_960_720.jpg"
                            
                            title="CLICK THE IMAGE FOR FULL VIEW"
                            onClick={this.openmodalHandler1}
                        />
                        <Modal
                            className={classes.modal}
                            open={this.state.open1}
                            onClose={this.closeModal1}
                            BackdropProps={{
                                classes: {
                                  root: classes.backdrop,
                                }
                              }}
                         >
                            <img src="https://cdn.pixabay.com/photo/2016/09/10/17/09/herbstaster-1659701_960_720.jpg" width="900" height="400" />
                        </Modal>
                    </Card>
                </Grid>

                <Grid item lg={4}>
                    <Card>
                        <CardHeader
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Nature"
                        subheader="September 14, 2016"
                        />
                        <CardMedia
                        className={classes.media}
                        image="https://img.etimg.com/photo/msid-68721421/nature.jpg"
                        
                        title="CLICK THE IMAGE FOR FULL VIEW"
                        onClick={this.openmodalHandler2}
                        />
                        <Modal
                            className={classes.modal}
                            open={this.state.open2}
                            onClose={this.closeModal2}
                            BackdropProps={{
                                classes: {
                                  root: classes.backdrop,
                                }
                              }}
                        >
                            <img src="https://img.etimg.com/photo/msid-68721421/nature.jpg"  width="900" height="400" />
                        </Modal>
                    </Card>
                </Grid>
            </Grid>

            
            </div>
        )
    }
}
export default Dashboard

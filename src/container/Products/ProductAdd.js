import React,{Component} from 'react';

import classes from '../Dashboard/Dashboard.css'
// import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
class add extends Component{
    render(){
        const tileData = [
            {
              img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
              title: 'image',
              author: 'SSSS',
           },
           {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
          {
             img: 'https://mymodernmet.com/wp/wp-content/uploads/2018/09/color-theory-basics.jpg',
             title: 'image',
             author: 'SSSS',
          },
         ]
        return(
            <div className={classes.gridlistdiv}>
                 <GridList className={classes.gridList} cols={2}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        // actionIcon={
                        //     <IconButton aria-label={`star ${tile.title}`}>
                        //     <StarBorderIcon className={classes.title} />
                        //     </IconButton>
                        // }
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default add
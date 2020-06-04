import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem'
import {NavLink} from 'react-router-dom'

const navigationItems = (props) =>{
    return(
          
      <TreeView>
                <TreeView
                defaultExpandIcon={<AccountBalanceOutlinedIcon />}
                >
                <div className={classes.item}>
                <NavLink to="/" exact activeClassName={classes.active}>
                   <TreeItem label="DashBoard">
                     <p >Dashboard</p>
                   </TreeItem>
                </NavLink>
                </div>
                </TreeView>

              
              <TreeView
              className={classes.root}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              endIcon={<AccountBalanceOutlinedIcon/>}
              >
              
              <div className={classes.root1}>
              <TreeItem nodeId="2" label="Products">
                <div className={classes.item} >
                <NavLink to="/products-list" exact activeClassName={classes.active}>
                <TreeItem nodeId="3" label="Product List" labelIcon="AddShoppingCartIcon"/>
                </NavLink>
                <NavLink to="/products-add" exact activeClassName={classes.active}>
                <TreeItem nodeId="4" label="Product Add" />
                </NavLink>
                </div>
              </TreeItem>

              <TreeItem nodeId="5" label="Orders">
                <div className={classes.item} >
                    <NavLink to="/orders-list" exact activeClassName={classes.active}>
                    <TreeItem nodeId="6" label="Orders List" />
                    </NavLink>
                </div>
              </TreeItem>

              <TreeItem nodeId="8" label="Charts">
                <div className={classes.item} >
                    <NavLink to="/charts" exact activeClassName={classes.active}>
                    <TreeItem nodeId="9" label="Charts" />
                    </NavLink>
                </div>
              </TreeItem>
              </div>
            </TreeView>
        </TreeView>
        






            // <ul className={classes.Navigationitems}>
            //     <NavigationItem link="/" exact>
            //         <AccountBalanceOutlinedIcon className={classes.alignmat} />Dashboard
            //     </NavigationItem>

            //     <div className={classes.alignitem}>
            //     <NavigationItem link="/products">
            //         <AddShoppingCartIcon className={classes.alignmat}/>Products
            //     </NavigationItem>
            //     </div>
                
            //     <div className={classes.alignitem}>
            //     <NavigationItem link="/orders" exact>
            //         <LabelImportantIcon className={classes.alignmat}/>Orders
            //     </NavigationItem>
            //     </div>

            //     <div className={classes.alignitem}>
            //     <NavigationItem link="/charts" exact>
            //         <BarChartIcon className={classes.alignmat}/>Charts
            //     </NavigationItem>
            //     </div>
            // </ul>
    )
}
export default navigationItems;




// import React from 'react';
// import classes from './NavigationItems.css'
// import TreeView from '@material-ui/lab/TreeView';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import TreeItem from '@material-ui/lab/TreeItem';
// import {NavLink} from 'react-router-dom'

// export default function navigationItems() {
 

//   return (
//     <TreeView
//       className={classes.root}
//       defaultCollapseIcon={<ExpandMoreIcon />}
//       defaultExpandIcon={<ChevronRightIcon />}
//     >
//       <TreeItem nodeId="1" label="Applications">
//         <NavLink to="/" exact>
//         <TreeItem nodeId="2" label="Calendar" />
//         </NavLink>
        
//         <TreeItem nodeId="3" label="Chrome" />
//         <TreeItem nodeId="4" label="Webstorm" />
//       </TreeItem>
//       <TreeItem nodeId="5" label="Documents">
//         <TreeItem nodeId="10" label="OSS" />
//         <TreeItem nodeId="6" label="Material-UI">
//           <TreeItem nodeId="7" label="src">
//             <TreeItem nodeId="8" label="index.js" />
//             <TreeItem nodeId="9" label="tree-view.js" />
//           </TreeItem>
//         </TreeItem>
//       </TreeItem>
//     </TreeView>
//   );
// }

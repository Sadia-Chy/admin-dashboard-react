import React,{Component} from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Dashboard from './container/Dashboard/Dashboard'
import ProductsList from './container/Products/ProductsList'
import ProductAdd from './container/Products/ProductAdd'
import OrdersList from './container/Orders/OrdersList'
import Charts from './container/Charts/Charts'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Layout>
      <Switch >
              <Route path="/products-list" component={ProductsList}/>
              <Route path="/products-add" component={ProductAdd}/>
              <Route path="/" exact component={Dashboard}/>
              <Route path="/orders-list" component={OrdersList}/>
              <Route path="/charts" component={Charts}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  )
  }
}

export default App;

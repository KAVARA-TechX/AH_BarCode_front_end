import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import ExistingUser from './Pages/ExistingUser';
import NewUser from './Pages/NewUser';
import ScanProduct from './Pages/ScanProducts';
import AdminRoute from './Pages/Admin/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminProducts from './Pages/Admin/AdminProducts';
import AdminCreateProduct from './Pages/Admin/AdminCreateProduct';
import AdminOrders from './Pages/Admin/AdminOrders';
import AdminClients from './Pages/Admin/AdminClients';
import { ToastContainer } from 'react-toastify';
import item from './Pages/itemList';
import Cart from './Pages/Cart';
import { useState } from 'react';
const App = () => {
   //Get current user somehow for storing it in the application

   //
   
  return (
    <>      
    <ToastContainer/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/existing-user" component={ExistingUser}/>
      <Route exact path="/new-user" component={NewUser}/>
      <Route exact path="/product-scan" component={ScanProduct}/>

      {/* Admin Routes */}
      <Route exact path="/admin" component={AdminRoute}/>
      <Route exact path="/admin/dashboard" component={AdminDashboard}/>
      <Route exact path="/admin/products" component={AdminProducts} />
      <Route exact path="/admin/add-product" component={AdminCreateProduct} />
      <Route exact path="/admin/orders" component={AdminOrders} />
      <Route exact path="/admin/clients" component={AdminClients} />
      
      {/* user route */}
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/store" component={item} />

    </Switch>
    </>
  );
}

export default App;

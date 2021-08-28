import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import logo from './Images/brand-white.png';
import ExistingUser from './Pages/ExistingUser';
import NewUser from './Pages/NewUser';
import ScanProduct from './Pages/ScanProducts';
import AdminRoute from './Pages/AdminRoute';
import AdminDashboard from './Pages/AdminDashboard';
import AdminProducts from './Pages/AdminProducts';
import AdminCreateProduct from './Pages/AdminCreateProduct';
import AdminOrders from './Pages/AdminOrders';
import AdminClients from './Pages/AdminClients';
const App = () => {
   
  return (
    <>
      <Link to="/"><img src={logo} alt="AH International" className="logoImg" /></Link>
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/existing-user" component={ExistingUser}/>
      <Route exact path="/new-user" component={NewUser}/>
      <Route exact path="/product-scan" component={ScanProduct}/>
      <Route exact path="/admin" component={AdminRoute}/>
      <Route exact path="/admin/dashboard" component={AdminDashboard}/>
      <Route exact path="/admin/products" component={AdminProducts} />
      <Route exact path="/admin/add-product" component={AdminCreateProduct} />
      <Route exact path="/admin/orders" component={AdminOrders} />
      <Route exact path="/admin/clients" component={AdminClients} />

    </Switch>
    </>
  );
}

export default App;

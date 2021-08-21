import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import logo from './Images/brand-white.png';
import ExistingUser from './Pages/ExistingUser';
import NewUser from './Pages/NewUser';
import ScanProduct from './Pages/ScanProducts';
const App = () => {
   
  return (
    <>
      <Link to="/"><img src={logo} alt="AH International" className="logoImg" /></Link>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/existing-user" component={ExistingUser}/>
      <Route exact path="/new-user" component={NewUser}/>
      <Route exact path="/product-scan" component={ScanProduct}/>
    </Switch>
    </>
  );
}

export default App;

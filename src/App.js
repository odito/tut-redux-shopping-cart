
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products';
import Details from './components/Details';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/store';








function App() {
  return (
  <Provider store={store} >

<div className="App">
     
     {/* navbar */}
     <Navbar />
  {/* end of navbar */}
  
  <Switch>
  <Route exact path='/' component={Home}  />
  <Route  path='/products' component={Products}  />
  <Route  path='/cart' component={Cart}  />
  <Route  path='/about' component={About}  />
  <Route  path='/details/:id' component={Details}  />
  <Route  path='/contact' component={Contact}  />
  </Switch>
  
  
   
     
  
      </div>
  </Provider>
  );
}

export default App;


// next cart component
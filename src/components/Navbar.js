import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import {connect} from 'react-redux';
import {toggleNav,closeNavbar} from '../components/actions/itemActions';

const Navbar = (props) => {

// const [toggle, setToggle] = useState(false);


// const toggleNav=()=>{
//     setToggle(!toggle);
// }



    return (
        <div className="navbar">
           <nav className="nav">
               <div className="logoBtn">
                 <Link to='/'><img src={logo} alt="logo"/>
                  <p><span>C</span>lothes</p>
                 </Link>

         
                <div className="shopping-icon mobile-shopping">
                 <Link to="/cart">
                 <i class="fas fa-shopping-cart"></i> <span>{props.item.cart.length}</span> 
                 </Link>
 
                 </div>

                 <div className="hamburger" onClick={props.toggleNav}>
                     <div className="bar"></div>
                     <div className="bar"></div>
                     <div className="bar"></div>
                 </div>

               </div>

               <div className="links">
                     {/* navbar menu */}
                     <div className={props.item.isOpen?"new-links-navigation":"links-navigation"}>
                         <div className="nav-btn">
                             <span onClick={props.toggleNav}>x</span>
                         </div>

                         <ul className="links-nav" onClick={props.closeNavbar}>
                             <li><Link to='/'>Home</Link></li>
                             <li><Link to='/about'>About</Link></li>
                             <li><Link to='/products'>Products</Link></li>
                             <li><Link to='/contact'>Contact</Link></li>
                         </ul>

                     </div>
                 </div>

                 <Link to='/cart'>

                     <div className="shopping-icon">
                     <i class="fas fa-shopping-cart"></i> <span>{props.item.cart.length}</span>  
                     </div>
                 </Link>
         
              

           </nav>
        </div>
    )
}


const mapStateToProps=(state)=>({
    item:state.item
})

export default connect(mapStateToProps,{toggleNav,closeNavbar})(Navbar)





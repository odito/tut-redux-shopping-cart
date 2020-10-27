import React, { useEffect, useState } from 'react';
// import {Data} from './Data';
import './Products.css';
import Product from './Product';
import {connect} from 'react-redux';
import {getItems, AddToCart, bannerClose} from '../components/actions/itemActions';



const Products = (props) => {

    // const [state, setState] = useState(Data);


    useEffect(()=>{
   props.getItems();

    },[])


// add to cart
const AddToCart=(id)=>{
 props.AddToCart(id);
 
 setTimeout(()=>{
   props.bannerClose();
 },2000)

}




    const {items} = props.item;
// console.log(items);

    return (
        <div className="products">

          <div className="inside-container">
              <h3>Products</h3>
              <div className="products-center">
                  {items.map(product=>  <Product key={product._id} data={product} AddToCart={()=>AddToCart(product._id)} isInCart={product.isInCart} />)}
              </div>
          </div>
          
        </div>
    )
}

const mapStateToProps = (state)=>({

item:state.item


})

export default connect(mapStateToProps, {getItems, AddToCart,bannerClose})(Products)

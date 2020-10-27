import React, { useEffect } from 'react';
import './Details.css';
import {useParams, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getItems, AddToCart} from '../components/actions/itemActions';





const Details = (props) => {



  useEffect(()=>{
      props.getItems();
  })  

const {id}=useParams();

let detailsProduct = props.item.items.find(item=>item._id===parseInt(id));

    return (
        <div className="details">
          <div className="inside-container">
              <h3>product details</h3>
              <div className="details-center">
                  <div className="details-img">
                      <img src={`/${detailsProduct.img}`} alt="product"/>
                  </div>

                  <div className="details-info">
    <h4 className="details-title">{detailsProduct.title}</h4>
    <p className="details-text-info">{detailsProduct.details}</p>

    <p className="details-price">
    price: <span>${detailsProduct.price}</span>

    </p>

    <div className="details-btn">
        <Link to="/products"><button>Back to products</button></Link>
        <button onClick={()=>props.AddToCart(detailsProduct._id)}>Add to cart</button>
    </div>

                  </div>
              </div>
          </div>
          
        </div>
    )
}


const mapStateToProps=(state)=>({
  item:state.item
})

export default connect(mapStateToProps,{getItems,AddToCart})(Details)

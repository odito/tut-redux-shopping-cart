import {GET_ITEMS,  ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV,
    CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, 
    TOTAL_ITEMS, DETAILS} from './types';

// for getting the initial showing items
export const getItems=()=>{
    return{
        type:GET_ITEMS
    }
}

// for appearing dissapearing navbar
export const toggleNav =()=>dispatch=>{
  

    dispatch({
        type:TOGGLE_NAV
    })
}

// for closing navbar if it is open
export const closeNavbar = ()=>dispatch=>{

  
    dispatch({
        type:CLOSE_NAVBAR
    })

}

// for adding item to cart
export const AddToCart =(id)=>dispatch=>{

 dispatch({
     type:ADD_ITEMS,
     payload:id
 })


}

// for closing the banner

export const bannerClose =()=>dispatch=>{

    dispatch({
        type:BANNER_CLOSE,
    
    })
   
   }


//    for deleting the items from the cart

export const deleteItem =(id)=>dispatch=>{

    dispatch({
        type:DELETE_ITEM,
        payload:id
    
    })
   
   }


   //    for increasing item inside cart

export const increaseItem =(id)=>dispatch=>{

    console.log(`increase :${id}`);
    dispatch({
        type:INCREASE_ITEM,
        payload:id
    
    })
   
   }


      //    for increasing item inside cart

export const decreaseItem =(id)=>dispatch=>{

    console.log(`DECREASE :${id}`);
    dispatch({
        type:DECREASE_ITEM,
        payload:id
    
    })
   
   }

         //  for getting the total price of items inside the cart

export const getTotals =()=>dispatch=>{

    dispatch({
        type:TOTAL_ITEMS,
      
    })
   
   }

//    get details



export const getDetails =()=>dispatch=>{

    dispatch({
        type:DETAILS,
      
    })
   
   }




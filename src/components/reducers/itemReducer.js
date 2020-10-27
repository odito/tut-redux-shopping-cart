import {GET_ITEMS,  ADD_ITEMS, DELETE_ITEM, TOGGLE_NAV,
    CLOSE_NAVBAR, BANNER_CLOSE, INCREASE_ITEM, DECREASE_ITEM, 
    TOTAL_ITEMS, DETAILS
} from '../actions/types';

const initialState = {
    items:[ {
        _id:1,
        img:'images/im1.png',
        title:'Red t-shirt',
        price:'100',
        details:'Red t-shirt 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your body and and your health',
        count:1,
        isInCart:false

    },

    {
        _id:2,
        img:'images/im2.png',
        title:'Pink t-shirt',
        price:'12',
        details:'Pink t-shirt with a very nice outfit and design. This model provides you a cool fit of your body and are suitable for every occasion',
        count:1,
        isInCart:false

    },

    {
        _id:3,
        img:'images/im3.png',
        title:'White t-shirt',
        price:'65',
        details:'White t-shirt for every occasions. This shirt is suitable for every occasion.You will surely feel confortable',
        count:1,
        isInCart:false

    },

    {
        _id:4,
        img:'images/im4.png',
        title:'purple t-shirt',
        price:'13',
        details:'purple t-shirt for every  ocassions which has to do with  sports or walks. Very good fit and feeling for your bodyy.',
        count:1,
        isInCart:false

    },

    {
        _id:5,
        img:'images/im5.png',
        title:'women white t-shirt',
        price:'45',
        details:'This t-shirts has been created from the best materials and provides you a good feeling for your body. Are good for every occasions.',
        count:1,
        isInCart:false

    },

    {
        _id:6,
        img:'images/im6.png',
        title:'blue t-shirt',
        price:'67',
        details:'This blue t-shirts has been created from the best materials and provides you a good feeling for your body. Are good for every occasions.',
        count:1,
        isInCart:false

    },

    {
        _id:7,
        img:'images/im7.png',
        title:'blue Hoodie',
        price:'43',
        details:'blue Hoodie is interesting  model from the company. It is very nice for your body and surelly you will not regret your choice.',
        count:1,
        isInCart:false

    },

    {
        _id:8,
        img:'images/im8.png',
        title:'bob marley shoes',
        price:'55',
        details:'Bob marley shoes is aspecial design shoes in the memory of the the famous shnger who made a lot of cool songs.This shoes provides you a good feeling of your foots.',
        count:1,
        isInCart:false

    },
],
cart:[],
isOpen:false,
total:0,
shipping:10
}

const Todos = (state=initialState, action)=>{
 
    switch(action.type){
     
        // get initial state
        case GET_ITEMS:
            return{
                ...state
            }

    //    toggle navigation fro appearing
    case TOGGLE_NAV:
        return{
            ...state,
            isOpen:!state.isOpen
        }

        // close navbar if it is open
      case CLOSE_NAVBAR:
          
      if(state.isOpen===true){
          return{
              ...state,
              isOpen:false
          }
      }

      
    
    //   add items to cart
    case ADD_ITEMS:

    let check =state.cart.find(item=>item._id===action.payload);
   
    if(!check){
        // bringing only the ites that match the id
        let items = state.items.filter(item=>item._id===action.payload);
        let itemsCart = [...state.cart, ...items]

        return{
            ...state,
            cart:itemsCart
        }
    }

    else{
        let items = state.items.filter(item=>item._id===action.payload);

        items.forEach(item=>{
            item.isInCart=true
            // alert(`already in cart`)
        })

        return{
            ...state
        }
    }

    // for closing banner after specific time
    case BANNER_CLOSE:
        state.items.forEach(item=>{
            item.isInCart=false
        })

        return{
            ...state
        }


        // delete item
        case DELETE_ITEM:
        
        const filteredCart = state.cart.filter(item=>item._id!==action.payload);
        
        return{
          ...state,
          cart:filteredCart
        } 
        
        
        // increasing ites inside cart
        case INCREASE_ITEM :
      
         let incResults = state.cart.map(item=>{
             if(item._id===action.payload){
                 item={...item, count:item.count +1}
             }
             return item
         })

        return{
            ...state,
            cart:incResults

        }

        // decrease item inside the cart
        case DECREASE_ITEM:
            
        let decResults = state.cart.map(item=>{
            if(item._id===action.payload){
                item={...item, count:item.count===1 ?item.count=1:item.count - 1}
            }
            return item;
        })

        return{
           ...state,
           cart:decResults

            }

        //get total price 
       case TOTAL_ITEMS:

         const totals = state.cart.reduce((prev, item)=>{
           return prev + (item.price * item.count)
         },0)

        return{
            ...state,
            total:totals
        }
      

    case DETAILS:
        
        return{
            ...state
        }
    







    

     default:
          return state

    }



}


export default Todos;
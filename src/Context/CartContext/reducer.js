

// reducer related to cart state;


function Cartreducer(state,action){

    console.log(state)
    
    switch (action.type){
        case "addtocart":
            return [...state,action.payload];
    
            case "removtocart":
                return state.filter(item=> item.id!==action.payload)
    
                case "checkout":
                    return [];
    
            default: return state;
    }
    
    
    }
    export default Cartreducer
    
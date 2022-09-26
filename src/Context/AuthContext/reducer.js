// reducer related to auth state;

// import { success } from "./action";



function reducer (state,action){
    // console.log(action.type)

switch (action.type){


    case "loading":
        return {...state ,loading:true};

        case "success":
            return {...state,success:true,loading: false ,token:action.payload,isAuth:true};

            case "failure":
                return {...state, success:false,loading:false,failure:true,token:null}

        default :
        return state;
}


}


export default reducer

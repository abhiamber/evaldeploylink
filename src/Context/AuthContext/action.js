// action creators related to auth state;


 export function loading(){

    return {type:"loading"}
}

 export function success(data){
      console.log(data)
    return {type:"success",payload:data}
}

export function failure (){

    return {type:"failure"}
}
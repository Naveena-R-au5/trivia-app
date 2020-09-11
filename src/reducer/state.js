export const initialState = null


export const reducer = (state,action)=>{
    //for user data
    if(action.type === "USER"){
        return action.payload
    }

    if(action.type === "Q1"){
        return action.payload
    }

    //for clear localdata
    if(action.type === "CLEAR"){
        return null
    }
    
    return state
}
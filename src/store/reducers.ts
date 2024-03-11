import {SET_TOKEN} from "@/store/types";

const initialState = {
    token : null,
}


type ActionType = {
    type : string,
    payload : any,
}
export default (state = initialState,{type,payload}:ActionType)=>{
    switch (type){
        case SET_TOKEN:
            return{...state,token:payload}
    }
    return state
}
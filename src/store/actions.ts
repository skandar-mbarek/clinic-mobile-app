import {SET_TOKEN} from "@/store/types";

export const setToken = (token:string|null)=>{
    return{
        type:SET_TOKEN,
        payload:token,
    }
}
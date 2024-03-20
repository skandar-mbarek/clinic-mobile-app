import {GET_USER, SET_TOKEN} from "@/store/types";
import { combineReducers } from 'redux';

interface IState {
    token: string | null;
    user: any;
}
export const initialState: IState = {
    token: null,
    user: null,
}
export type ActionType = {
    type: string,
    payload: any,
}
export default (state: IState = initialState, {type, payload}: ActionType):IState => {
    switch (type) {
        case SET_TOKEN:
            return {...state, token: payload}
        case GET_USER:
            return {...state, user: payload}
        default:
            return state;
    }
}

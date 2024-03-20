import {GET_USER, SET_TOKEN} from "@/store/types";
import {Dispatch} from "redux";
import axiosInstance from "@/services/config/axios-config";
import {endPoint} from "@/Constants/ws-config";

export const setToken = (token: string | null) => {
    return {
        type: SET_TOKEN,
        payload: token,
    }
}
export const getUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            const {data} = await axiosInstance.get(endPoint.USER_CONNECTED)
            dispatch({
                type: GET_USER,
                payload: data
            })
        } catch (e) {
            console.log(e);
        }
    }
}
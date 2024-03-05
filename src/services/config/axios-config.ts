import axios from "axios";
import * as SecureStore from "expo-secure-store"
import {endPoint} from "@/services/config/ws-config";


const TIME_OUT = 30000
export const USER_TOKEN = "token"


const axiosInstance = axios.create({
    baseURL: endPoint.BASE_URL,
    timeout: TIME_OUT,
})

export const saveToken = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value)
    } catch (e) {
        console.log("error in saveToken", e)
    }
}
axiosInstance.interceptors.request.use(async (req) => {
    try {
        const access_token = await SecureStore.getItemAsync(USER_TOKEN)
        req.headers.Authorization = access_token
        return req
    } catch (e) {
        return req
    }
})
export const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data)

export default axiosInstance
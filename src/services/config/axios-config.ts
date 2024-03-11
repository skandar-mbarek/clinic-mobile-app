import axios from "axios";
import * as SecureStore from "expo-secure-store"
import {endPoint, TIME_OUT} from "@/Constants/ws-config";
import {USER_TOKEN} from "@/Constants/global-const";


const axiosInstance = axios.create({
    baseURL: endPoint.BASE_URL,
    timeout: TIME_OUT,
})


axiosInstance.interceptors.request.use(async (req) => {
    try {
        req.headers.Authorization = await SecureStore.getItemAsync(USER_TOKEN)
        return req
    } catch (e) {
        return req
    }
})
export const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data)

export default axiosInstance
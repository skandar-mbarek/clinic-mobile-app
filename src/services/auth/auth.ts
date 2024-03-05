import {ILogin, IRegister, IResetPassword} from "@/types";
import axiosInstance, {saveToken, USER_TOKEN} from "@/services/config/axios-config";
import {endPoint} from "@/services/config/ws-config";


export const registerUser = async (user: IRegister) => {
    try {
        const response = await axiosInstance.post("/auth/register/patient", user)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("error in registerUser", error)
        throw error
    }
}

export const loginUser = async ({phoneNumber, password}: ILogin) => {


    try {
        console.log("azeazeaze")
        const response = await axiosInstance.post(endPoint.LOGIN, {
            phoneNumber,
            password
        })
        const _token = response.data.token
        axiosInstance.defaults.headers.common["Authorization"] = _token
        saveToken(USER_TOKEN, _token)
        return response.data
    } catch (e) {
        console.log("error in Login User", e)

        throw e;
    }
}
export const verify = async (otp: string,phoneNumber:string) => {
    try {
        const response = await axiosInstance.post("/auth/verify",null,
            {params:{
            phoneNumber:phoneNumber,
            otp:otp,
        }})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("error in verify", error)
        throw error
    }
}
export const forgotPassword = async (phoneNumber:string) => {
    try {
        const response = await axiosInstance.post("/auth/forgot-password",null,
            {params:{
                    phoneNumber:phoneNumber
                }})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("error in forgot password", error)
        throw error
    }
}



export const resetPassword = async ({phoneNumber,otp,newPassword}:IResetPassword) => {
    try {
        const response = await axiosInstance.post("/auth/reset-password",null,
            {params:{
                    phoneNumber:phoneNumber,
                    otp : otp,
                    newPassword : newPassword
                }})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log("error in reset password", error)
        throw error
    }
}
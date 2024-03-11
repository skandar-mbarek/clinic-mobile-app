import {ILogin, IRegister, IResetPassword} from "@/types";
import {saveToken} from "@/services/config/secureStore-config";
import {endPoint} from "@/Constants/ws-config";
import axiosInstance from "@/services/config/axios-config";
import {USER_TOKEN} from "@/Constants/global-const";


export const registerUser = async (user: IRegister) => {
    try {
        const response = await axiosInstance.post(endPoint.REGISTER, user)
        return response.data
    } catch (error) {
        throw error
    }
}

export const loginUser = async ({phoneNumber, password}: ILogin) => {


    try {
        const response = await axiosInstance.post(endPoint.LOGIN, {
            phoneNumber,
            password
        })
        const _token = response.data.token
        await saveToken(USER_TOKEN, _token)
        return response.data
    } catch (e) {
        throw e;
    }
}
export const verify = async (otp: string, phoneNumber: string) => {
    try {
        const response = await axiosInstance.post(endPoint.VERIFY, null,
            {
                params: {
                    phoneNumber: phoneNumber,
                    otp: otp,
                }
            })
        const _token = response.data.token
        await saveToken(USER_TOKEN, _token)
        return response.data
    } catch (error) {
        throw error
    }
}
export const forgotPassword = async (phoneNumber: string) => {
    try {
        const response = await axiosInstance.post(endPoint.FORGOT_PASSWORD, null,
            {
                params: {
                    phoneNumber: phoneNumber
                }
            })
        return response.data
    } catch (error) {
        throw error
    }
}


export const resetPassword = async ({phoneNumber, otp, newPassword}: IResetPassword) => {
    try {
        const response = await axiosInstance.post(endPoint.RESET_PASSWORD, null,
            {
                params: {
                    phoneNumber: phoneNumber,
                    otp: otp,
                    newPassword: newPassword
                }
            })
        const _token = response.data.token
        await saveToken(USER_TOKEN, _token)
        return response.data
    } catch (error) {
        throw error
    }
}
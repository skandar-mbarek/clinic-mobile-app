import * as SecureStore from "expo-secure-store";


export const USER_TOKEN = "token"


export const saveToken = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value)
    } catch (e) {
        console.log("error in saveToken", e)
    }
}
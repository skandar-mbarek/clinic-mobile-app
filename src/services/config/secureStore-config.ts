import * as SecureStore from "expo-secure-store";




export const saveToken = async (key: string, value: string) => {
    try {
        await SecureStore.setItemAsync(key, value)
    } catch (e) {
        console.log("error in saveToken", e)
    }
}

export const getToken = async (key: string)=>{
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    }catch (e){
        console.log("error in getToken",e);
        return null;
    }
}
export const resetToken = async (key : string)=>{
    try {
        await SecureStore.deleteItemAsync(key);
        console.log("token reset successful");
    }catch (e){
        console.log("error resetting token",e);
    }
}

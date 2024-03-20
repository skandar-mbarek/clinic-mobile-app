import React from 'react';
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {Button} from "@/components/shared/button";
import {USER_TOKEN} from "@/Constants/global-const";
import {setToken} from "@/store/actions";
import {resetToken} from "@/services/config/secureStore-config";
import {useDispatch} from "react-redux";

const ProfileScreen = () => {

    const dispatch = useDispatch();

    const onSubmit = async () => {
        try {
            resetToken(USER_TOKEN)
            dispatch(setToken(null))

        } catch (e: any) {
            e
        }
    }
    return (
        <SafeAreaWrapper>

            <Button onPress={onSubmit} label={"Log out"}/>
        </SafeAreaWrapper>
    );
};

export default ProfileScreen;
import React, {useState} from 'react';
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import theme, {Box, Text} from "@/utils/theme";
import BackButton from "@/components/shared/backButton";
import {Controller, useForm} from "react-hook-form";
import Input from "@/components/shared/input";
import {AntDesign} from "@expo/vector-icons";
import {Button} from "@/components/shared/button";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";
import {IForgot} from "@/types";
import {forgotPassword} from "@/services/auth/auth";
import Error from "@/components/shared/error";
import {forgotPasswordText} from "@/Constants/screen-text";
import {inputErrorText, inputText} from "@/Constants/input-text";
import {buttonText} from "@/Constants/button-text";
import {TUNISIA_NUMBER} from "@/Constants/global-const";


const ForgotPasswordScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"ForgotPassword">>()

    const [errorMessage, setErrorMessage] = useState("");

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IForgot>({
        defaultValues: {
            phoneNumber: "",
        }
    })

    const navigateToResetPasswordScreen = (phoneNumber: string) => {
        navigation.navigate("ResetPassword", {phoneNumber: phoneNumber})
    }

    const onSubmit = async (data: IForgot) => {
        try {
            const phoneNumber: string = TUNISIA_NUMBER+ data.phoneNumber
            const response = await forgotPassword(phoneNumber)
            navigateToResetPasswordScreen(phoneNumber)
        } catch (e: any) {
            setErrorMessage(e.response.data.message)
        }
    }

    return (
        <SafeAreaWrapper>
            <LinearGradient style={{flex: 1}} colors={[
                theme.colors.blu100,
                theme.colors.blu200,
                theme.colors.blu300,
                theme.colors.blu300,
                theme.colors.blu300,
                theme.colors.blu300,
                theme.colors.blu200,
                theme.colors.blu100
            ]}>

                <Box m={"3"}>
                    <BackButton onPress={navigation.goBack}/>
                </Box>
                <Box flex={1} justifyContent={"center"}>
                    <Box alignItems={"center"} mt={"13"}>
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>{forgotPasswordText.TITLE}</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            {forgotPasswordText.SUB_TITLE}
                        </Text>

                    </Box>

                    <Box m={"3"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[0-9]{8}$/,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={inputText.PHONE}
                                    icon={<AntDesign name="phone" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    inputMode={"tel"}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.phoneNumber}
                                    errorMessage={inputErrorText.PHONE_ERROR}
                                />
                            )}
                            name={"phoneNumber"}
                        />

                    </Box>
                    {errorMessage !== "" && <Error message={errorMessage}/>}

                    <Box mx={"6"} my={"4"}>
                        <Button label={buttonText.VERIFY} onPress={handleSubmit(onSubmit)}/>
                    </Box>


                </Box>


            </LinearGradient>
        </SafeAreaWrapper>
    );
};

export default ForgotPasswordScreen;
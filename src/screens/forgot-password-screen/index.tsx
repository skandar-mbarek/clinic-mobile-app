import React, {useState} from 'react';
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {LinearGradient} from "expo-linear-gradient";
import theme, {Box, Text} from "@/utils/theme";
import BackButton from "@/components/shared/backButton";
import {Controller, useForm} from "react-hook-form";
import Input from "@/components/shared/input";
import {AntDesign, Octicons} from "@expo/vector-icons";
import {Button} from "@/components/shared/button";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";
import {IForgot, IVerify} from "@/types";
import {forgotPassword, verify} from "@/services/auth/auth";
import Error from "@/components/shared/error";

const ForgotPasswordScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"ForgotPassword">>()

    const [errorMessage , setErrorMessage] = useState("");

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IForgot >({
        defaultValues:{
            phoneNumber:"",
        }
    })

    const navigateToResetPasswordScreen = (phoneNumber : string) => {
      navigation.navigate("ResetPassword", {phoneNumber : phoneNumber})
    }

    const onSubmit = async (data: IForgot) => {
        try {
            const phoneNumber : string = data.phoneNumber
            const response = await forgotPassword(phoneNumber)
            console.log(response)
            navigateToResetPasswordScreen(data.phoneNumber)
        } catch (e:any) {
            console.log("screen",e.response.data.message)
            setErrorMessage(e.response.data.message)
        }
    }

    return (
        <SafeAreaWrapper>
            <LinearGradient style={{flex:1}} colors={[
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
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>Forgot password</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            Enter your phone number.
                        </Text>

                    </Box>

                    <Box m={"3"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,

                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={"Your phone number"}
                                    icon={<AntDesign name="phone" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    inputMode={"tel"}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.phoneNumber}
                                    errorMessage={"enter your phone number"}
                                />
                            )}
                            name={"phoneNumber"}
                        />

                    </Box>
                    {errorMessage !==""&& <Error message={errorMessage}/>}

                    <Box mx={"6"} my={"4"}>
                        <Button label={"Verify"} onPress={handleSubmit(onSubmit)} />
                    </Box>



                </Box>


            </LinearGradient>
        </SafeAreaWrapper>
    );
};

export default ForgotPasswordScreen;
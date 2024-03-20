import theme, {Box, Text} from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import Input from "@/components/shared/input";
import {Button} from "@/components/shared/button";
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import React, {useState} from "react";
import {Pressable} from "react-native";
import BackButton from "@/components/shared/backButton";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";
import {Controller, useForm} from "react-hook-form";
import {ILogin} from "@/types";
import {loginUser} from "@/services/auth/auth";
import Error from "@/components/shared/error";
import {signInText} from "@/Constants/screen-text";
import {inputErrorText, inputText} from "@/Constants/input-text";
import {buttonText} from "@/Constants/button-text";
import {TUNISIA_NUMBER} from "@/Constants/global-const";
import {useDispatch} from "react-redux";
import {setToken} from "@/store/actions";

const SignInScreen = () => {

    const dispatch = useDispatch();


    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<ILogin>({
        defaultValues: {
            phoneNumber: "",
            password: ""
        }
    })
    const [errorMessage, setErrorMessage] = useState("");


    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }
    const navigateToForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword")
    }

    const onSubmit = async (data: ILogin) => {
        try {
            data.phoneNumber = TUNISIA_NUMBER + data.phoneNumber
            const {phoneNumber, password} = data

            const _user = await loginUser({
                phoneNumber,
                password
            })
            dispatch(setToken(_user.token))
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
                    <BackButton onPress={() => navigation.goBack()}/>
                </Box>
                <Box flex={1} justifyContent={"flex-start"}>
                    <Box alignItems={"center"} mt={"13"}>
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>{signInText.TITLE}</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            {signInText.SUB_TITLE}
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
                                    inputMode={"tel"}
                                    icon={<AntDesign name="phone" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.phoneNumber}
                                    errorMessage={inputErrorText.PHONE_ERROR}
                                />
                            )}
                            name={"phoneNumber"}
                        />


                    </Box>

                    <Box m={"3"}>

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={inputText.PASSWORD}
                                    icon={<MaterialIcons name="password" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Password"
                                    secureTextEntry
                                    error={errors.password}
                                    errorMessage={inputErrorText.PASSWORD_ERROR}
                                />
                            )}
                            name="password"
                        />

                    </Box>

                    <Box flexDirection={"row"} mt={"3"} justifyContent={"space-between"}>
                        <Pressable onPress={() => navigateToSignUpScreen()}>
                            <Box ml={"5"}>
                                <Text
                                    variant={"textBase"}
                                    fontWeight={"700"}
                                    textAlign={"center"}
                                    color={"blu600"}
                                    textDecorationLine={"underline"}
                                >
                                    {buttonText.CREATE_ACCOUNT}
                                </Text>
                            </Box>
                        </Pressable>
                        <Pressable onPress={() => navigateToForgotPasswordScreen()}>
                            <Box mr={"5"}>
                                <Text
                                    variant={"textBase"}
                                    fontWeight={"700"}
                                    textAlign={"center"}
                                    color={"blu600"}
                                    textDecorationLine={"underline"}
                                >
                                    {buttonText.FORGOT_PASSWORD}
                                </Text>
                            </Box>
                        </Pressable>

                    </Box>
                    {errorMessage !== "" && <Error message={errorMessage}/>}
                    <Box mt={"5"} mx={"5"}>
                        <Button label={buttonText.SIGN_IN} onPress={handleSubmit(onSubmit)}/>
                    </Box>


                </Box>

            </LinearGradient>

        </SafeAreaWrapper>
    );
};

export default SignInScreen;
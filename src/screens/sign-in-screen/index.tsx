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

const SignInScreen = () => {


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
    const [errorMessage , setErrorMessage] = useState("");


    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }
    const navigateToForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword")
    }

    const onSubmit = async (data: ILogin) => {
        try {
            const {phoneNumber, password} = data
            const _user = await loginUser({
                phoneNumber,
                password
            })
            console.log(_user)
        } catch (e : any) {
            console.log("screen",e.response.data.message)
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
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>Sign in</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            This application is exclusively designed for patients !
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
                                    label={"Enter your phone number"}
                                    icon={<AntDesign name="phone" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.phoneNumber}
                                    errorMessage={"This phone number is not valid"}
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
                                    label={"Enter your password"}
                                    icon={<MaterialIcons name="password" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Password"
                                    secureTextEntry
                                    error={errors.password}
                                    errorMessage={"Enter your password"}
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
                                    Create account ?
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
                                    Forgot password ?
                                </Text>
                            </Box>
                        </Pressable>

                    </Box>
                    {errorMessage !==""&& <Error message={errorMessage}/>}
                    <Box mt={"5"} mx={"5"}>
                        <Button label={"Sign In"} onPress={handleSubmit(onSubmit)}/>
                    </Box>


                </Box>

            </LinearGradient>

        </SafeAreaWrapper>
    );
};

export default SignInScreen;
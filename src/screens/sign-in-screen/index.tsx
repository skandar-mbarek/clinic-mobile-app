import theme, {Box, Text} from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import Input from "@/components/shared/input";
import {Button} from "@/components/shared/button";
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import React from "react";
import {Pressable} from "react-native";
import BackButton from "@/components/shared/backButton";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";

const SignInScreen = () => {



    const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }
    const navigateToForgotPasswordScreen = () => {
        navigation.navigate("ForgotPassword")
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
                    <BackButton onPress={()=>navigation.goBack()}/>
                </Box>
                <Box flex={1} justifyContent={"center"} >
                    <Box alignItems={"center"} mt={"13"}>
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}  >Sign in</Text>
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
                    <Box mx={"3"} >
                        <Input
                            label={"Enter your phone number"}
                            icon={<AntDesign name="phone" size={24} color="black" />}
                        />
                    </Box>

                    <Box  mx={"3"} >
                        <Input
                            label={"Enter your password"}
                            icon={<MaterialIcons name="password" size={24} color="black" />}
                        />
                    </Box>

                    <Box flexDirection={"row"} mt={"3"}>
                        <Pressable onPress={()=>navigateToSignUpScreen()}>
                            <Box  ml={"5"} mr={"13"}  >
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
                            <Pressable  onPress={()=>navigateToForgotPasswordScreen()}>
                                <Box  ml={"10"} >
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
                    <Box mt={"5"} mx={"5"}>
                        <Button label={"Sign In"} onPress={()=>console.log("bara mreg")}/>
                    </Box>



                </Box>



            </LinearGradient>
        </SafeAreaWrapper>
    );
};

export default SignInScreen;
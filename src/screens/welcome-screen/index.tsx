import React from 'react';
import theme, {Box, Text} from "@/utils/theme";
import {useNavigation} from "@react-navigation/native";
import {Image, StyleSheet} from "react-native";
import {AuthScreenNavigationType} from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import {Button} from "@/components/shared/button";

const WelcomeScreen = () => {


    const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
    const navigateToSignUpScreen = () => {
        navigation.navigate("SignUp")
    }
    const navigateToSignInScreen = () => {
        navigation.navigate("SignIn")
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
                <Box flex={1} justifyContent={"center"}>
                    <Box alignItems={"center"} mb={"3.5"}>
                        <Image
                            source={require('@/assets/images/welcome.png')} style={{height: 300, width: 300}}
                        />
                    </Box>
                    <Text textAlign={"center"} variant={"textXl"} fontWeight={"700"}>
                        Welcome to the Clicnic app!
                    </Text>
                    <Text
                        textAlign={"center"}
                        mx={"13"}
                        mt={"3"}
                        fontWeight={"400"}
                        variant={"textSm"}
                        color={"gray600"}
                    >
                        To access the features of this application,
                        please log in. If you don't have an account yet,
                        feel free to sign up
                    </Text>
                    <Box mt={"3.5"} mx={"5"}>
                        <Button label={"Sign in"} onPress={navigateToSignInScreen}/>
                    </Box>
                    <Box mt={"2"} mx={"5"}>
                        <Button label={"Sign up"} onPress={navigateToSignUpScreen}/>
                    </Box>

                </Box>
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


            </LinearGradient>
        </SafeAreaWrapper>
    );

};
const style = StyleSheet.create({
        welcomeText: {}
    }
)

export default WelcomeScreen;
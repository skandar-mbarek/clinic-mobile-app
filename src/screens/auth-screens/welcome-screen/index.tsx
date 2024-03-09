import React from 'react';
import theme, {Box, Text} from "@/utils/theme";
import {useNavigation} from "@react-navigation/native";
import {Image} from "react-native";
import {AuthScreenNavigationType} from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import {Button} from "@/components/shared/button";
import {imagesPath} from "@/assets/images";
import {welcomeText} from "@/Constants/screen-text";
import {buttonText} from "@/Constants/button-text";

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
                            source={imagesPath.WELCOME_IMG} style={{height: 300, width: 300}}
                        />
                    </Box>
                    <Text textAlign={"center"} variant={"textXl"} fontWeight={"700"}>
                        {welcomeText.TITLE}
                    </Text>
                    <Text
                        textAlign={"center"}
                        mx={"13"}
                        mt={"3"}
                        fontWeight={"400"}
                        variant={"textSm"}
                        color={"gray600"}
                    >
                        {welcomeText.DESCRIPTION}
                    </Text>
                    <Box mt={"3.5"} mx={"5"}>
                        <Button label={buttonText.SIGN_IN} onPress={navigateToSignInScreen}/>
                    </Box>
                    <Box mt={"2"} mx={"5"}>
                        <Button label={buttonText.SIGN_UP} onPress={navigateToSignUpScreen}/>
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
                    {welcomeText.BOTTOM_TEXT}
                </Text>


            </LinearGradient>
        </SafeAreaWrapper>
    );

};


export default WelcomeScreen;
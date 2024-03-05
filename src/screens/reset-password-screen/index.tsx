import React, {useState} from 'react';
import theme, {Box, Text} from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {AuthScreenNavigationType, AuthStackParamList} from "@/navigation/types";
import {Controller, useForm} from "react-hook-form";
import {IResetPassword, IVerify} from "@/types";
import {resetPassword, verify} from "@/services/auth/auth";
import {LinearGradient} from "expo-linear-gradient";
import BackButton from "@/components/shared/backButton";
import Input from "@/components/shared/input";
import {MaterialIcons, Octicons} from "@expo/vector-icons";
import {Button} from "@/components/shared/button";
import Error from "@/components/shared/error";


type ResetScreenRouteProp = RouteProp<AuthStackParamList,"ResetPassword">

const ResetPasswordScreen = () => {

    const navigation = useNavigation<AuthScreenNavigationType<"ResetPassword">>()



    const route = useRoute<ResetScreenRouteProp>()
    const {phoneNumber} = route.params
    console.log(phoneNumber,"azeazeazeaeae")

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IResetPassword >({
        defaultValues:{
            phoneNumber:phoneNumber,
            otp:"",
            newPassword:"",
        }
    })

    const [errorMessage , setErrorMessage] = useState("");


    const onSubmit = async (data: IResetPassword) => {
        try {
            const _user = await resetPassword(data)
            console.log(_user)
        } catch (e : any) {
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
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>Reset password</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            Enter the code sent to your phone number. and your new password
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
                                    label={"Code"}
                                    icon={<Octicons name="codescan-checkmark" size={24} color="black" />}
                                    onBlur={onBlur}
                                    inputMode={"decimal"}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.otp}
                                    errorMessage={"enter the code"}
                                />
                            )}
                            name={"otp"}
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
                                    label={"New password"}
                                    icon={<MaterialIcons name="password" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    inputMode={"text"}
                                    secureTextEntry={true}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.newPassword}
                                    errorMessage={"enter the new password"}
                                />
                            )}
                            name={"newPassword"}
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

export default ResetPasswordScreen;
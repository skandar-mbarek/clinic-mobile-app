import React, {useState} from 'react';
import theme, {Box, Text} from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {LinearGradient} from "expo-linear-gradient";
import BackButton from "@/components/shared/backButton";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {AuthScreenNavigationType, AuthStackParamList} from "@/navigation/types";
import {Controller, useForm} from "react-hook-form";
import {IVerify} from "@/types";
import Input from "@/components/shared/input";
import {Octicons} from "@expo/vector-icons";
import {Button} from "@/components/shared/button";
import {verify} from "@/services/auth/auth";
import Error from "@/components/shared/error";
import {verifyPhoneText} from "@/Constants/screen-text";
import {inputErrorText, inputText} from "@/Constants/input-text";
import {buttonText} from "@/Constants/button-text";


type VerifyScreenRouteProp = RouteProp<AuthStackParamList, "VerifyPhoneNumber">


const VerifyPhoneNumberScreen = () => {


    const navigation = useNavigation<AuthScreenNavigationType<"VerifyPhoneNumber">>()


    const route = useRoute<VerifyScreenRouteProp>()
    const {phoneNumber} = route.params


    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<IVerify>({
        defaultValues: {
            otp: "",
        }
    })
    const [errorMessage, setErrorMessage] = useState("");


    const onSubmit = async (data: IVerify) => {
        try {
            const otp: string = data.otp
            const _user = await verify(otp, phoneNumber)
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
                        <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>{verifyPhoneText.TITLE}</Text>
                        <Text
                            textAlign={"center"}
                            mx={"13"}
                            mb={"10"}
                            fontWeight={"400"}
                            variant={"textSm"}
                            color={"gray500"}
                        >
                            {verifyPhoneText.SUB_TITLE}
                        </Text>

                    </Box>

                    <Box m={"3"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[0-9]{6}$/,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={inputText.CODE}
                                    icon={<Octicons name="codescan-checkmark" size={24} color="black"/>}
                                    onBlur={onBlur}
                                    inputMode={"numeric"}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.otp}
                                    errorMessage={inputErrorText.CODE_ERROR}
                                />
                            )}
                            name={"otp"}
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

export default VerifyPhoneNumberScreen;
import React, {useState} from 'react';
import theme, {Box, Text} from "@/utils/theme";
import {Platform, Pressable, ScrollView} from "react-native";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";
import {LinearGradient} from "expo-linear-gradient";
import BackButton from "@/components/shared/backButton";
import Input from "@/components/shared/input";
import {AntDesign, Fontisto, MaterialIcons} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from "@/components/shared/button";
import {Controller, useForm} from "react-hook-form";
import {IRegister} from "@/types";
import {registerUser} from "@/services/auth/auth";
import Error from "@/components/shared/error";
import {signUpText} from "@/Constants/screen-text";
import {inputErrorText, inputText} from "@/Constants/input-text";
import {buttonText} from "@/Constants/button-text";
import {TUNISIA_NUMBER} from "@/Constants/global-const";


const SignUpScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>()


    const [date, setDate] = useState("")
    const [showPicker, setShowPicker] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm<IRegister>({
        defaultValues: {
            firstName: "",
            lasName: "",
            phoneNumber: "",
            password: "",
            dateOfBirth: null,
            role: "PATIENT",
        }

    })
    const [errorMessage, setErrorMessage] = useState("");


    const navigateToVerifyPhoneNumberScreen = (phoneNumber: string) => {
        navigation.navigate("VerifyPhoneNumber", {phoneNumber: phoneNumber})
    }

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    }

    const openPicker = () => {
        console.log("hello")
        setShowPicker(true)
    }

    interface DateTimePickerEvent {
        type: string;
    }

    const handleOnChange = ({type}: DateTimePickerEvent, selectedDate?: Date): void => {

        if (type === "set" && selectedDate) {
            if (Platform.OS === "android") {
                setShowPicker(false)
                console.log("changed", selectedDate)

                setTimeout(() => {
                    setDate(selectedDate.toDateString())
                }, 0)

                setValue("dateOfBirth", selectedDate)
            }
        } else {
            toggleDatepicker();
        }
    };

    const onSubmit = async (data: IRegister) => {
        try {
            data.phoneNumber = TUNISIA_NUMBER+data.phoneNumber
            const responseData = await registerUser(data);
            navigateToVerifyPhoneNumberScreen(data.phoneNumber)

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
                <ScrollView>

                    <Box m={"3"}>
                        <BackButton onPress={navigation.goBack}/>
                    </Box>
                    <Box flex={1} justifyContent={"center"}>
                        <Box alignItems={"center"} mt={"1"}>
                            <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>{signUpText.TITLE}</Text>
                            <Text
                                textAlign={"center"}
                                mx={"13"}
                                mb={"3"}
                                fontWeight={"400"}
                                variant={"textSm"}
                                color={"gray500"}
                            >
                                {signUpText.SUB_TITLE}
                            </Text>
                        </Box>
                    </Box>


                    {/*firstName .......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<MaterialIcons name="drive-file-rename-outline" size={24} color="black"/>}
                                    label={inputText.FIRST_NAME}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.firstName}
                                    errorMessage={inputErrorText.FIRST_NAME_ERROR}
                                />
                            )}
                            name={"firstName"}
                        />
                    </Box>

                    {/*lastName ...r.......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<MaterialIcons name="drive-file-rename-outline" size={24} color="black"/>}
                                    label={inputText.LAST_NAME}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.lasName}
                                    errorMessage={inputErrorText.LAST_NAME_ERROR}
                                />
                            )}
                            name={"lasName"}
                        />
                    </Box>

                    {/*DateOfBirth .......*/}
                    {(
                        <Pressable onPress={openPicker}>
                            <Box mx={"4"} my={"2"}>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: true,
                                    }}
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <Input
                                            icon={<Fontisto name="date" size={24} color="black"/>}
                                            label={inputText.DATE_OF_BIRTH}
                                            value={value ? value.toDateString() : ""}
                                            error={errors.dateOfBirth}
                                            errorMessage={inputErrorText.DATE_OF_BIRTH_ERROR}
                                            editable={false}
                                        />
                                    )}
                                    name={"dateOfBirth"}
                                />


                            </Box>
                        </Pressable>
                    )}
                    {
                        showPicker && (

                            <Controller
                                control={control}
                                render={({field: {onChange, onBlur, value}}) => (
                                    <DateTimePicker
                                        mode={"date"}
                                        display={"spinner"}
                                        value={value ? value : new Date()}
                                        onChange={handleOnChange}
                                    />
                                )}
                                name={"dateOfBirth"}
                            />
                        )
                    }
                    {/*PhoneNumber .......*/}
                    <Box mx={"4"} my={"2"}>
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
                                    inputMode={"tel"}
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

                    {/*Password .......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={inputText.PASSWORD}
                                    icon={<MaterialIcons name="password" size={24} color="black"/>}
                                    inputMode={"text"}
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.password}
                                    errorMessage={inputErrorText.PASSWORD_ERROR}
                                />
                            )}
                            name={"password"}
                        />
                    </Box>


                    <Text textAlign={"center"} mx={"6"} fontWeight={"400"} variant={"textSm"} color={"gray500"}>
                        {signUpText.BOTTOM_TEXT}
                    </Text>

                    {errorMessage !== "" && <Error message={errorMessage}/>}

                    <Box mx={"6"} my={"4"}>
                        <Button label={buttonText.SIGN_UP} onPress={handleSubmit(onSubmit)}/>
                    </Box>


                </ScrollView>
            </LinearGradient>
        </SafeAreaWrapper>
    );
};


export default SignUpScreen;
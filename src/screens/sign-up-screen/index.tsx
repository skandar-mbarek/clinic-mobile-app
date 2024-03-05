import React, {useState} from 'react';
import theme, {Box, Text} from "@/utils/theme";
import {Platform, Pressable, ScrollView} from "react-native";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {useNavigation} from "@react-navigation/native";
import {AuthScreenNavigationType} from "@/navigation/types";
import {LinearGradient} from "expo-linear-gradient";
import BackButton from "@/components/shared/backButton";
import Input from "@/components/shared/input";
import {
    AntDesign,
    Feather,
    FontAwesome,
    FontAwesome6,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button} from "@/components/shared/button";
import {Controller, useForm} from "react-hook-form";
import {IRegister} from "@/types";
import {registerUser} from "@/services/auth/auth";
import dateFormater from "@/utils/helpers/date_converter";
import Error from "@/components/shared/error";


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
            email: "",
            password: "",
            dateOfBirth: new Date(),
            cnamCode: "",
            state: "",
            city: "",
            country: "",
            street: "",
            zipCode: "",
            role: "PATIENT",
        }

    })
    const [errorMessage , setErrorMessage] = useState("");



    const navigateToVerifyPhoneNumberScreen = (phoneNumber:string) => {
        navigation.navigate("VerifyPhoneNumber", {phoneNumber:phoneNumber})
    }

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    }

    const openPicker =  ()=> {
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
                console.log("changed" , selectedDate)

                setTimeout(()=>{
                    setDate(selectedDate.toDateString())
                },0)

                setValue("dateOfBirth" , selectedDate)
            }
        } else {
            toggleDatepicker();
        }
    };

    const onSubmit = async (data: IRegister) => {
        try {
            console.log(data)
            const responseData = await registerUser(data);
            console.log(responseData);
            navigateToVerifyPhoneNumberScreen(data.phoneNumber)

        } catch (e:any) {
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
                <ScrollView>

                    <Box m={"3"}>
                        <BackButton onPress={navigation.goBack}/>
                    </Box>
                    <Box flex={1} justifyContent={"flex-start"}>
                        <Box alignItems={"center"} mt={"1"}>
                            <Text variant={"text3Xl"} fontWeight={"700"} mb={"5"}>Sign up</Text>
                            <Text
                                textAlign={"center"}
                                mx={"13"}
                                mb={"3"}
                                fontWeight={"400"}
                                variant={"textSm"}
                                color={"gray500"}
                            >
                                Please provide your information to create an account.
                            </Text>
                        </Box>
                    </Box>
                    <Box mx={"5"} mt={"5"} alignItems={"center"}>
                        <Text color={"green700"} variant={"textXl"}>required information</Text>
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
                                    label={"First Name "}
                                    inputMode={"text"}
                                  r  onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.firstName}
                                    errorMessage={"Enter your first Name"}
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
                                    label={"Last name "}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.lasName}
                                    errorMessage={"Enter your last name"}
                                />
                            )}
                            name={"lasName"}
                        />
                    </Box>

                    {/*DateOfBirth .......*/}
                    { (
                        <Pressable onPress={openPicker}>
                            <Box mx={"4"} my={"2"}>

                                        <Input
                                            icon={<Fontisto name="date" size={24} color="black"/>}
                                            label={"Date of birth  "}
                                            value={date}
                                            errorMessage={"Enter your date of birth"}
                                            editable={false}
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
                                value={value}
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
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    label={"Phone number"}
                                    icon={<AntDesign name="phone" size={24} color="black"/>}
                                    inputMode={"tel"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.phoneNumber}
                                    errorMessage={"Enter your phone number"}
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
                                    label={"Password"}
                                    icon={<MaterialIcons name="password" size={24} color="black"/>}
                                    inputMode={"text"}
                                    secureTextEntry={true}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.password}
                                    errorMessage={"Enter your Password"}
                                />
                            )}
                            name={"password"}
                        />
                    </Box>

                    <Box alignItems={"center"}>
                        <Text color={"green700"} variant={"textXl"}>Optional information</Text>
                    </Box>

                    {/*Email .......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<Feather name="mail" size={24} color="black"/>}
                                    label={"Enter your email @ "}
                                    inputMode={"email"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.email}
                                    errorMessage={"Enter your email"}
                                />
                            )}
                            name={"email"}
                        />
                    </Box>

                    {/*CNAMCode .......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<MaterialIcons name="assured-workload" size={24} color="black"/>}
                                    label={"Enter your CNAM code "}
                                    inputMode={"numeric"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.cnamCode}
                                    errorMessage={"Enter your cnamCode"}
                                />
                            )}
                            name={"cnamCode"}
                        />
                    </Box>

                    {/*State .......*/}
                    <Box mx={"4"} my={"2"} flex={1}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<AntDesign name="earth" size={24} color="black"/>}
                                    label={"Your state "}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.state}
                                    errorMessage={"Enter your state"}
                                />
                            )}
                            name={"state"}
                        />
                    </Box>

                    {/*City .......*/}
                    <Box mx={"4"} my={"2"} flex={1}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<MaterialCommunityIcons name="city-variant-outline" size={24} color="black"/>}
                                    label={"Your city "}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.state}
                                    errorMessage={"Enter your city"}
                                />
                            )}
                            name={"city"}
                        />
                    </Box>

                    {/*Country .......*/}
                    <Box mx={"4"} my={"2"} flex={1}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<FontAwesome6 name="tree-city" size={24} color="black"/>}
                                    label={"Your country "}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.country}
                                    errorMessage={"Enter your country"}
                                />
                            )}
                            name={"country"}
                        />
                    </Box>

                    {/*ZIPCode .......*/}
                    <Box mx={"4"} my={"2"} flex={1}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<MaterialIcons name="quick-contacts-mail" size={24} color="black"/>}
                                    label={"Your  ZIP code "}
                                    inputMode={"numeric"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.zipCode}
                                    errorMessage={"Enter your ZIP Code"}
                                />
                            )}
                            name={"zipCode"}
                        />
                    </Box>

                    {/*Street .......*/}
                    <Box mx={"4"} my={"2"}>
                        <Controller
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <Input
                                    icon={<FontAwesome name="street-view" size={24} color="black"/>}
                                    label={"Your street "}
                                    inputMode={"text"}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.street}
                                    errorMessage={"Enter your street"}
                                />
                            )}
                            name={"street"}
                        />
                    </Box>


                    <Text textAlign={"center"} mx={"6"} fontWeight={"400"} variant={"textSm"} color={"gray500"}>
                        After registering, you must verify the code sent to your phone.
                    </Text>

                    {errorMessage !==""&& <Error message={errorMessage}/>}

                    <Box mx={"6"} my={"4"}>
                        <Button label={"Register"} onPress={handleSubmit(onSubmit)}/>
                    </Box>


                </ScrollView>
            </LinearGradient>
        </SafeAreaWrapper>
    );
};


export default SignUpScreen;
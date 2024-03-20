import React, {useState} from 'react';
import {Box, Text} from "@/utils/theme";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {DoctorsNavigationType, DoctorStackParamList} from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {Dimensions, Image, ImageBackground, Pressable, ScrollView} from "react-native";
import {imagesPath} from "@/assets/images";
import {AntDesign, Entypo, Feather, Fontisto, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {colors} from "@/utils/theme/colors";
import {Button} from "@/components/shared/button";
import {doctorDetailsScreenText} from "@/Constants/screen-text";
import {buttonText} from "@/Constants/button-text";


type DoctorDetailsScreenRouteProp = RouteProp<DoctorStackParamList, "DoctorDetails">
const DoctorDetailsScreen = () => {


    const navigation = useNavigation<DoctorsNavigationType>()
    const route = useRoute<DoctorDetailsScreenRouteProp>()
    const {doctor} = route.params


    const years = (date: Date) => {
        const datee = new Date(date)
        const currentDate = new Date().getTime()
        const differenceMs = currentDate - datee.getTime();
        return Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365));
    }



    const navigateToTakeAppointmentScreen=()=>{
        navigation.navigate("TakeAppointment")
    }

    return (

        <SafeAreaWrapper>
            <ScrollView>

                <Box flex={1} backgroundColor={"white"}>

                    <ImageBackground source={imagesPath.DOCTOR_IMG} style={{height:400}}>
                        <Box m={"5"}>
                            <Pressable onPress={()=>navigation.goBack()}>
                                <Ionicons name="arrow-back" size={30} color={colors.gray500} />
                            </Pressable>
                        </Box>
                        <Box style={{
                            backgroundColor:"#f3c22c",
                            position:'absolute',
                            bottom:-18,
                            right:20}}
                             borderRadius={"rounded-3xl"}
                             p={"2"}

                        >
                            <Text color={"white"}>
                                {years(doctor.licenceDate)+doctorDetailsScreenText.EXPERIENCE}
                            </Text>
                        </Box>
                    </ImageBackground>

                    <Box mt={"6"} ml={"5"}>
                        <Box flexDirection={"row"} justifyContent={"space-between"}>
                        <Text variant={"text2Xl"} fontWeight={"700"}>
                            {doctorDetailsScreenText.DR}
                            {doctor && doctor.firstName ? doctor.firstName.charAt(0).toUpperCase() + doctor.firstName.slice(1) : ""}
                            {" "}
                            {doctor && doctor.lastName ? doctor.lastName.charAt(0).toUpperCase() + doctor.lastName.slice(1) : ""}
                        </Text>


                        </Box>
                        <Box flexDirection={"row"} alignItems={"center"} mt={"2"} >
                            <Entypo name="location-pin" size={16} color={colors.gray500} />
                            <Text color={"gray500"} ml={"1"}>
                                {doctor.address.country+" | "+doctor.address.state+" | "+doctor.address.city+" | "+doctor.address.zipCode}
                            </Text>
                        </Box>
                        <Box flexDirection={"row"} alignItems={"center"} mt={"1"} >
                            <MaterialIcons name="location-city" size={16} color={colors.gray500} />
                            <Text color={"gray500"} ml={"1"}>
                                {doctor.address.street}
                            </Text>
                        </Box>
                        <Box flexDirection={"row"} mt={"1"}>
                            <Box style={{backgroundColor:"#fefae2", borderColor:"#f0d896"}} px={"2"} py={"1"} borderRadius={"rounded-3xl"} borderWidth={1}>
                                <Text style={{color:"#f0d896"}}  fontWeight={"400"} variant={"textLg"}>
                                    {doctor && doctor.speciality.name ? doctor.speciality.name.charAt(0).toUpperCase() + doctor.speciality.name.slice(1) : ""}
                                </Text>
                            </Box>
                        </Box>
                        <Box mt={"4"} pr={"2"}>
                            <Text variant={"textBase"} fontWeight={"300"} color={"gray500"} > {doctor.speciality.description}</Text>
                        </Box>


                            <Text mt={"4"} color={"gray900"} variant={"textXl"} fontWeight={"500"} >
                                {doctorDetailsScreenText.WORK_DAYS}
                            </Text>
                            <Box flexDirection={"row"} flexWrap={"wrap"}>
                            {
                                doctor.schedule.days.map((day,index)=>(
                                        <Box
                                            style={{backgroundColor:"#edfdf9"}}
                                            borderRadius={"rounded-3xl"}
                                            py={"1"}
                                            px={"2"}
                                            m={"1"}

                                        >
                                            <Text variant={"textSm"} fontWeight={"500"} color={"amber700"}>{day}</Text>
                                        </Box>
                                ))
                            }
                            </Box>

                        <Box flexDirection={"row"} mt={"2"} alignItems={"center"}>

                            <Ionicons name="time-outline" size={18} color={colors.gray500} />
                            <Text mx={"1"}
                                variant={"textBase"}
                                color={"gray500"}
                            >
                                {doctor.schedule.timeFrom.slice(0,-3)}
                            </Text>
                            <AntDesign name="arrowright" size={18} color={colors.gray500} />
                            <Text mx={"1"}
                                  variant={"textBase"}
                                  color={"gray500"}
                            >
                                {doctor.schedule.timeTo.slice(0,-3)}
                            </Text>
                        </Box>
                        <Text mt={"2"} color={"gray900"} variant={"textXl"} fontWeight={"500"} >
                            {doctorDetailsScreenText.CONTACTS}
                        </Text>
                            <Text
                                variant={"textBase"}
                                color={"gray500"}
                                textDecorationLine={"underline"}
                                textAlignVertical={"center"}
                                mt={"2"}
                            >
                                <Fontisto name="email" size={18} color={colors.gray500} />
                                {doctorDetailsScreenText.EMAIL}{doctor.email}
                            </Text>
                        <Text
                            variant={"textBase"}
                            color={"gray500"}
                            textDecorationLine={"underline"}
                            textAlignVertical={"center"}
                            mt={"2"}
                        >
                            <Feather name="phone" size={18} color={colors.gray500} />
                            {doctorDetailsScreenText.PHONE_NUMBER}{doctor.phoneNumber}
                        </Text>




                    </Box>

                    <Box mx={"6"} my={"3"}>
                        <Button label={buttonText.TAKE_APPOINTMENT} onPress={navigateToTakeAppointmentScreen}/>
                    </Box>
                </Box>

            </ScrollView>
        </SafeAreaWrapper>
    );
};

export default DoctorDetailsScreen;
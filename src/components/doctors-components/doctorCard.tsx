import React from 'react';
import {Box, Text} from "@/utils/theme";
import {Image, Pressable} from "react-native";
import {imagesPath} from "@/assets/images";
import {IDoctor} from "@/types";
import {AntDesign, Octicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {DoctorsNavigationType} from "@/navigation/types";
import {doctorCardText} from "@/Constants/components-text";


type DoctorProps = {
    doctor: IDoctor
}
const DoctorCard = ({doctor}: DoctorProps) => {
    const navigation = useNavigation<DoctorsNavigationType>()

    const licenceDate = new Date(doctor.licenceDate)
    const currentDate = new Date().getTime()
    const differenceMs = currentDate - licenceDate.getTime();
    const yearsOfExperience = Math.floor(differenceMs / (1000 * 60 * 60 * 24 * 365));

    const navigateToDoctorDetailsScreen = () => {
        navigation.navigate("DoctorDetails", {
            doctor: doctor
        })
    }


    return (

        <Pressable onPress={navigateToDoctorDetailsScreen}>

            <Box bg="gray200" borderWidth={1} borderColor={"gray500"} p={"3"} borderRadius="rounded-3xl" elevation={2}>
                <Box flexDirection={"row"}
                     alignItems={"flex-start"}
                     justifyContent={"flex-start"}
                >
                    <Image
                        source={imagesPath.DOCTOR_IMG} style={{
                        height: 90,
                        width: 90,
                        borderRadius: 10,
                        marginRight: 20,

                    }}
                    />
                    <Box>
                        <Text
                            variant={"textXl"}
                            fontWeight={"700"}
                            fontFamily={"sans-serif-condensed"}
                        >
                            {doctorCardText.DR}
                            {doctor && doctor.firstName ? doctor.firstName.charAt(0).toUpperCase() + doctor.firstName.slice(1) : ""}
                            {" "}
                            {doctor && doctor.lastName ? doctor.lastName.charAt(0).toUpperCase() + doctor.lastName.slice(1) : ""}
                        </Text>
                        <Text
                            variant={"textLg"}
                            color={"gray700"}
                            fontWeight={"500"}
                        >
                            {doctor && doctor.speciality.name ? doctor.speciality.name.charAt(0).toUpperCase() + doctor.speciality.name.slice(1) : ""}
                        </Text>
                        <Text variant={"textSm"} color={"gray500"} fontWeight={"500"} mt={"1"}>
                            {yearsOfExperience.toString()+ doctorCardText.EXPERIENCE}
                        </Text>

                    </Box>
                </Box>

                <Box flexDirection={"row"} mt={"1"} alignItems={"center"} justifyContent={"space-around"}>
                    <Box flexDirection={"row"} mt={"1"} alignItems={"center"}>
                        <Box mr={"1"}>
                            <AntDesign name="phone" size={20} color="green"/>
                        </Box>
                        <Text
                            textDecorationLine={"underline"}
                            variant={"textBase"}
                            color={"gray500"}
                        >
                            {doctor.phoneNumber}
                        </Text>
                    </Box>

                    <Box flexDirection={"row"} mt={"1"} alignItems={"center"}>
                        <Box mr={"1"}>
                            <Octicons name="location" size={20} color="green"/>
                        </Box>
                        <Text
                            textDecorationLine={"underline"}
                            variant={"textBase"}
                            color={"gray500"}
                        >
                            {doctor.address.state}{" | "}
                            {doctor.address.city}

                        </Text>
                    </Box>

                </Box>


            </Box>


        </Pressable>

    );
};

export default DoctorCard;
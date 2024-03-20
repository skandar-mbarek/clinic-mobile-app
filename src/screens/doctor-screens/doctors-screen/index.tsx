import React, {useEffect, useState} from 'react';
import {Box, Text} from "@/utils/theme";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import {getAllDoctors, getAllSpecialities} from "@/services/doctor/doctor";
import {FlatList, Pressable} from "react-native";
import {IDoctor, ISpecialty} from "@/types";
import {STATE_OPTIONS} from "@/Constants/global-const";
import SelectItem from "@/components/shared/selectItem";
import DoctorCard from "@/components/doctors-components/doctorCard";
import {StatusBar} from "expo-status-bar";
import {colors} from "@/utils/theme/colors";
import {AntDesign, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import UserCard from "@/components/user-components/user-card";
import {doctorsScreenText} from "@/Constants/screen-text";


const DoctorsScreen = () => {
    const [selectedSpeciality, setSelectedSpeciality] = useState<number | null>(null)
    const [selectOptionsSpecialities, setSelectOptionsSpecialities] = useState<{ key: number; value: string }[]>([]);
    const [selectedState, setSelectedState] = useState<string>("")
    const [doctors, setDoctors] = useState<IDoctor[]>([])
    const [pageable, setPageable] = useState({})
    const [totalPages, setTotalPages] = useState<number>(0)
    const [page, setPage] = useState<number>(0)
    console.log(selectOptionsSpecialities)

    const iconColor: string = colors.green

    console.log("selected Speciality :" + selectedSpeciality)
    console.log("selected state :  " + selectedState)


    const fetchData = async () => {
        try {
            const data = await getAllDoctors(selectedSpeciality, selectedState, page, 10);
            const doctors: IDoctor[] = data.content
            const pageable: any = data.pageable
            const totalPages: number = data.totalPages
            const specialities = await getAllSpecialities();
            const selectOptions = specialities.map((specialty: ISpecialty) => ({
                key: specialty.id,
                value: specialty.name
            }));
            setSelectOptionsSpecialities(selectOptions)
            setDoctors(doctors)
            setPageable(pageable)
            setTotalPages(totalPages)


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const nextPage = () => {
        setPage(page + 1)
    }
    const backPage = () => {
        setPage(page - 1)
    }

    useEffect(() => {
        fetchData()
    }, [selectedState, selectedSpeciality, page])

    const renderItem = ({item}: { item: IDoctor }) => (
        <DoctorCard doctor={item}/>
    )
    return (
        <SafeAreaWrapper>
            <UserCard/>
            <FlatList
                data={doctors}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={{margin: 10}}
                ItemSeparatorComponent={() => <Box height={10}/>}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => (
                    <Box flex={1} justifyContent={"flex-start"}>
                        <Box flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <MaterialIcons name="health-and-safety" size={35} color={iconColor}/>
                            <Text mx={"4"}
                                  variant={"text2Xl"}
                                  fontWeight={"700"}
                                  fontFamily={"monospace"}
                                  color={"gray900"}
                            >
                                {doctorsScreenText.TITLE} </Text>
                        </Box>
                        <Box alignItems={"center"}>


                        </Box>


                        <Box
                            my={"2"}


                            elevation={1}
                            paddingBottom={"2"}
                        >


                            <SelectItem
                                placeholder={selectedSpeciality ? selectOptionsSpecialities[selectedSpeciality - 1].value : "Speciality"}
                                setSelected={setSelectedSpeciality}
                                data={selectOptionsSpecialities}
                                save="key"
                                arrowicon={<AntDesign name="caretdown" size={20} color={iconColor}/>}
                                searchicon={<MaterialIcons name="manage-search" size={24} color={iconColor}/>}
                                closeicon={<AntDesign name="closecircleo" size={22} color={iconColor}/>}

                            />

                            <SelectItem
                                placeholder={selectedState ? selectedState : "State"}
                                setSelected={setSelectedState}
                                data={STATE_OPTIONS}
                                save="value"
                                arrowicon={<AntDesign name="caretdown" size={20} color={iconColor}/>}
                                searchicon={<FontAwesome5 name="search-location" size={18} color={iconColor}/>}
                                closeicon={<AntDesign name="closecircleo" size={22} color={iconColor}/>}
                            />
                        </Box>
                    </Box>
                )}


                ListFooterComponent={() => (
                    <Box flexDirection={"row"} justifyContent={"center"} mt={"2"}>
                        {page !== 0 &&
                            <Pressable onPress={backPage}>
                                <Box mx={"2"}>
                                    <MaterialCommunityIcons name="page-first" size={30} color="black"/>
                                    <Text variant={"textSm"} color={"gray500"}>{doctorsScreenText.BACK}</Text>
                                </Box>
                            </Pressable>
                        }
                        {page > 0 && page < totalPages - 1 &&
                            <Box mx={"2"}>
                                <MaterialCommunityIcons name="drag-vertical-variant" size={30} color="black"/>
                            </Box>
                        }
                        {page < totalPages - 1 &&
                            <Pressable onPress={nextPage}>
                                <Box mx={"2"}>
                                    <MaterialCommunityIcons name="page-last" size={30} color="black"/>
                                    <Text variant={"textSm"} color={"gray500"}>{doctorsScreenText.NEXT}</Text>
                                </Box>
                            </Pressable>
                        }
                    </Box>

                )}


            />
        </SafeAreaWrapper>
    );
};

export default DoctorsScreen;
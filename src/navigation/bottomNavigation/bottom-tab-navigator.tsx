import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootBottomTabParamList} from "@/navigation/types";
import theme from "@/utils/theme";
import {AntDesign, Entypo, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import HomeStackNavigator from "@/navigation/bottomNavigation/home-stack-navigator";
import DoctorStackNavigator from "@/navigation/bottomNavigation/doctor-stack-navigator";
import AppointmentStackNavigator from "@/navigation/bottomNavigation/appointment-stack-navigator";
import ConsultationStackNavigator from "@/navigation/bottomNavigation/consultation-stack-navigator";
import ProfileStackNavigator from "@/navigation/bottomNavigation/profile-stack-navigator";
import {colors} from "@/utils/theme/colors";
import React from "react";


const Tab = createBottomTabNavigator<RootBottomTabParamList>()
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

            screenOptions={({route}) => ({
                tabBarActiveTintColor: "black",
                tabBarActiveBackgroundColor: colors.green,
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarHideOnKeyboard: true,
                tabBarItemStyle: {
                    borderRadius: 50,
                    marginHorizontal: 3,
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderRadius: 50,
                    marginHorizontal: 10,
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'center', // Center the items horizontally
                },

                tabBarIcon: ({color, focused}) => {
                    let iconName;

                    if (route.name === 'HomeStack') {
                        iconName = 'home';
                    } else if (route.name === 'DoctorsStack') {
                        iconName = 'doctor';
                    } else if (route.name === 'AppointmentStack') {
                        iconName = 'back-in-time';
                    } else if (route.name === 'ConsultationStack') {
                        iconName = 'account-details';
                    } else if (route.name === 'ProfileStack') {
                        iconName = 'account-circle-outline';
                    }

                    // Determine the color of the icon based on focus
                    const iconColor = focused ? 'white' : color;

                    // Return the icon component with the determined color
                    switch (iconName) {
                        case 'home':
                            return <AntDesign name={iconName} size={30} color={iconColor}/>;

                        case 'doctor':
                            return <Fontisto name={iconName} size={30} color={iconColor}/>;
                        case 'back-in-time':
                            return <Entypo name={iconName} size={30} color={iconColor}/>;
                        case 'account-details':
                            return <MaterialCommunityIcons name={iconName} size={30} color={iconColor}/>;
                        case 'account-circle-outline':
                            return <MaterialCommunityIcons name={iconName} size={30} color={iconColor}/>;

                        default:
                            return null;
                    }
                },
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    tabBarItemStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderRadius: 50,
                    },
                    headerShown: false,
                }}

            />
            <Tab.Screen
                name="DoctorsStack"
                component={DoctorStackNavigator}
                options={{
                    headerShown: false,
                }}

            />
            <Tab.Screen
                name="AppointmentStack"
                component={AppointmentStackNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ConsultationStack"
                component={ConsultationStackNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ProfileStack"
                component={ProfileStackNavigator}
                options={{
                    tabBarItemStyle: {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderRadius: 50,

                    },
                    headerShown: false,

                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
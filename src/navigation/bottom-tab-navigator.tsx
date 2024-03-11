import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootBottomTabParamList} from "@/navigation/types";
import theme from "@/utils/theme";
import homeScreen from "@/screens/home-screens/home-screen";
import {Entypo, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';
import doctorsScreen from "@/screens/doctor-screens/doctors-screen";
import appointmentsScreen from "@/screens/appointment-screen/appointments-screen";
import consultationsScreen from "@/screens/consultation-screens/consultations-screen";
import HomeStackNavigator from "@/navigation/home-stack-navigator";
import doctorStackNavigator from "@/navigation/doctor-stack-navigator";
import DoctorStackNavigator from "@/navigation/doctor-stack-navigator";
import AppointmentStackNavigator from "@/navigation/appointment-stack-navigator";
import ConsultationStackNavigator from "@/navigation/consultation-stack-navigator";
import ProfileScreen from "@/screens/profile-screens/profile-screen";
import ProfileStackNavigator from "@/navigation/profile-stack-navigator";



const Tab = createBottomTabNavigator<RootBottomTabParamList>()
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:"black",
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarHideOnKeyboard:true,
            }}
            >
            <Tab.Screen
                name={"HomeStack"}
                component={HomeStackNavigator}
                options={() => ({
                    title : "home",
                    tabBarIcon:()=><Entypo name="home" size={30} color="black" />,
                    headerShown:false,
                })
            }
            />
            <Tab.Screen
                name={"DoctorsStack"}
                component={DoctorStackNavigator}
                options={() => ({
                    title : "doctor",
                    tabBarIcon:()=><Fontisto name="doctor" size={30} color="black" />,
                    headerShown:false,
                })
                }
            />
            <Tab.Screen
                name={"AppointmentStack"}
                component={AppointmentStackNavigator}
                options={() => ({
                    title : "RDV",
                    tabBarIcon:()=><Entypo name="back-in-time" size={30} color="black" />,
                    headerShown:false,
                })
                }
            />
            <Tab.Screen
                name={"ConsultationStack"}
                component={ConsultationStackNavigator}
                options={() => ({
                    title : "Consultation",
                    tabBarIcon:()=><MaterialCommunityIcons name="account-details" size={30} color="black" />,
                    headerShown:false,
                })
                }
            />
            <Tab.Screen
                name={"profile"}
                component={ProfileStackNavigator}
                options={() => ({
                    title : "Profile",
                    tabBarIcon:()=><MaterialCommunityIcons name="account-circle" size={30} color="black" />,
                    headerShown:false,
                })
                }
            />



        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
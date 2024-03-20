import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DoctorStackParamList} from "@/navigation/types";
import DoctorsScreen from "@/screens/doctor-screens/doctors-screen";
import DoctorDetailsScreen from "src/screens/doctor-screens/doctor-details-screen";
import TakeAppointmentScreen from "@/screens/doctor-screens/take-appointment-screen";


const Stack = createNativeStackNavigator<DoctorStackParamList>()


const DoctorStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Doctors"}
                component={DoctorsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"DoctorDetails"}
                component={DoctorDetailsScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={"TakeAppointment"}
                component={TakeAppointmentScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export default DoctorStackNavigator;
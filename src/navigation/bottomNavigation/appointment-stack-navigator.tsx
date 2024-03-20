import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppointmentStackParamList} from "@/navigation/types";
import AppointmentsScreen from "@/screens/appointment-screen/appointments-screen";


const Stack = createNativeStackNavigator<AppointmentStackParamList>()


const AppointmentStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Appointments"}
                component={AppointmentsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export default AppointmentStackNavigator;
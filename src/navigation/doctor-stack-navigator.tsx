import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DoctorStackParamList} from "@/navigation/types";
import DoctorsScreen from "@/screens/doctor-screens/doctors-screen";


const Stack = createNativeStackNavigator<DoctorStackParamList>()



const DoctorStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Doctors"}
                component={DoctorsScreen}
                options={{
                    headerShown : false
                }}
            />
        </Stack.Navigator>
    );
};

export default DoctorStackNavigator;
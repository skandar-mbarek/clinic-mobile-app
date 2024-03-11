import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ConsultationStackParamList} from "@/navigation/types";
import ConsultationScreen from "@/screens/consultation-screens/consultations-screen";


const Stack = createNativeStackNavigator<ConsultationStackParamList>()


const ConsultationStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Consultations"}
                component={ConsultationScreen}
                options={{
                    headerShown : false
                }}
            />
        </Stack.Navigator>
    );
};

export default ConsultationStackNavigator;
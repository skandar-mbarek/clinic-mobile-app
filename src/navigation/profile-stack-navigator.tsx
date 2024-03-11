import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ProfileStackParamList} from "@/navigation/types";
import ProfileScreen from "@/screens/profile-screens/profile-screen";


export const Stack = createNativeStackNavigator<ProfileStackParamList>()


const ProfileStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStackNavigator;
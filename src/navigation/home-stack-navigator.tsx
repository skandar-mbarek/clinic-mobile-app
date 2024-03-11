import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeStackParamList} from "@/navigation/types";
import HomeScreen from "@/screens/home-screens/home-screen";


const Stack = createNativeStackNavigator<HomeStackParamList>()


const HomeStackNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    headerShown : false,
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
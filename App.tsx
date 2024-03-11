import theme from "@/utils/theme";
import {ThemeProvider} from "@shopify/restyle";
import Navigation from "@/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function App() {
    return (
        <Provider store={store}>

            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <Navigation/>
                    <StatusBar backgroundColor={theme.colors.blu100}/>
                </SafeAreaProvider>
            </ThemeProvider>
        </Provider>
    );
}



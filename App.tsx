import theme from "@/utils/theme";
import {ThemeProvider} from "@shopify/restyle";
import Navigation from "@/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Navigation/>
                <StatusBar backgroundColor={theme.colors.blu100}/>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}



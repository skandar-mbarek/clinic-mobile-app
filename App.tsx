import theme from "@/utils/theme";
import {color, ThemeProvider} from "@shopify/restyle";
import Navigation from "@/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {colors} from "@/utils/theme/colors";

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



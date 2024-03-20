import theme from "@/utils/theme";
import {ThemeProvider} from "@shopify/restyle";
import Navigation from "@/navigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {enableScreens} from "react-native-screens";
import React from "react";
import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {colors} from "@/utils/theme/colors";

export default function App() {
    return (
        <View style={styles.container}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SafeAreaProvider>
                    <Navigation/>
                </SafeAreaProvider>
            </ThemeProvider>
        </Provider>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffffff',
        flex: 1, // This ensures the container takes up the whole screen
    },
});



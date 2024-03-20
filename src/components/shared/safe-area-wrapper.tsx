import React, {ReactNode} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {colors} from "@/utils/theme/colors";


type SafeAreaWrapperProps = {
    children: ReactNode
}

const SafeAreaWrapper = ({children}: SafeAreaWrapperProps) => {
    return (
            <SafeAreaView   style={{ flex: 1 ,backgroundColor:colors.white}}>
                {children}
            </SafeAreaView>

    );
};

export default SafeAreaWrapper;
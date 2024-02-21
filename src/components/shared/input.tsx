import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from "react-native";
import theme, {Box, Text} from "@/utils/theme";
import { AntDesign } from '@expo/vector-icons';
import {border} from "@shopify/restyle";



type InputProps = {
    label : string
    error?: undefined
    icon? : React.ReactElement;
} & TextInputProps

const Input = ({icon,label,error}:InputProps) => {
    return (
        <View style={styles.inputContainer}>

            <Box m={"3"} >{icon}</Box>
            <TextInput
                placeholder={label}
                style={styles.input}


            />
        </View>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: theme.borderRadii["rounded-5xl"],
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor:theme.colors.gray300,
        height:70
    },

    input: {
        flex: 1,
        height: 70,
    },
});

export default Input;
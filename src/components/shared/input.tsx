import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from "react-native";
import theme, {Box, Text} from "@/utils/theme";
import {FieldError} from "react-hook-form";


type InputProps = {
    label: string
    icon?: React.ReactElement;
    error?: FieldError | undefined
    errorMessage?: String
} & TextInputProps

const Input = ({icon, label, secure, numericKeyboard, error, errorMessage, ...rest}: InputProps & {
    [key: string]: any
}) => {
    return (

        <Box>
            <View style={styles.inputContainer}>

                <Box m={"3"}>{icon}</Box>
                <TextInput
                    placeholder={label}
                    style={styles.input}
                    {...rest}
                />

            </View>
            {error && (
                <Text color={"rose500"}>
                    -{errorMessage}
                </Text>
            )}
        </Box>
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

        backgroundColor: theme.colors.white,
        height: 60
    },

    input: {
        flex: 1,
        height: 65,
        fontSize: 18
    },
});

export default Input;
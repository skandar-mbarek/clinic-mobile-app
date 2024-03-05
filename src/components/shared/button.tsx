import React from 'react';
import {Box, Text} from "@/utils/theme";
import {Pressable} from "react-native";

interface ButtonProps {
    label: string,
    onPress?: () => void
    onLongPress?: () => void
    disabled?: boolean
}

export const Button = ({label, onPress, onLongPress, disabled}: ButtonProps) => {
    return (

        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled}
        >
            <Box bg={"green700"} py={"4"} borderRadius={"rounded-7xl"}>
                <Text
                    variant={"textBase"}
                    fontWeight={"900"}
                    textAlign={"center"}
                    color={"white"}
                >
                    {label}
                </Text>
            </Box>
        </Pressable>
    );
};


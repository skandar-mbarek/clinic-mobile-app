import React from 'react';
import {Box} from "@/utils/theme";
import {Pressable} from "react-native";
import {AntDesign} from '@expo/vector-icons';


interface BackButtonProps {
    onPress: () => void,
    onLongPress?: () => void
}

const BackButton = ({onPress, onLongPress}: BackButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Box bg={"blu200"} width={45} height={45} justifyContent={"center"} alignItems={"center"}
                 borderRadius={"rounded-2xl"}>
                <AntDesign name="back" size={30} color="black"/>
            </Box>
        </Pressable>
    );
};

export default BackButton;
import React from 'react';
import {Box, Text} from "@/utils/theme";
import {MaterialIcons} from '@expo/vector-icons';


interface ErrorProps {
    message: string
}

const Error = ({message}: ErrorProps) => {
    return (
        <Box flexDirection={"row"}
             justifyContent={"flex-start"}
             mx={"5"}
             mt={"2"}
             backgroundColor={"red300"}
             alignItems={"center"}
             borderRadius={"rounded-xl"}
        >
            <Box m={"1"}>
                <MaterialIcons name="error-outline" size={35} color="red"/>
            </Box>
            <Box width={"80%"}>
                < Text color={"gray600"} variant={"textSm"} fontWeight={"normal"}
                       numberOfLines={undefined}>{message}</Text>
            </Box>
        </Box>
    );
};

export default Error;
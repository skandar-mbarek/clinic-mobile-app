import React from 'react';
import {Box, Text} from "@/utils/theme";
import {Image} from "react-native";
import {imagesPath} from "@/assets/images";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {userCardText} from "@/Constants/components-text";
import {GENDER} from "@/Constants/global-const";

const UserCard = () => {
    const user = useSelector((state: RootState) => state.data.user)
    return (
        <Box bg={"green"} borderBottomLeftRadius={"rounded-8xl"} borderBottomRightRadius={"rounded-8xl"}
             paddingVertical={"1"} elevation={5}>
            <Box flexDirection={"row"} paddingLeft={"5"} alignItems={"center"}>

                <Image

                    source={imagesPath.USER_IMG} style={{
                    height: 60, //
                    width: 60,  //
                    borderRadius: 40,
                    marginHorizontal: 10,
                    marginVertical: 3

                }}
                />
                <Box marginLeft={"5"}>
                    <Text
                        variant={"textXl"}
                        fontWeight={"400"}
                        color={"gray600"}
                    >
                        {userCardText.HELLO}
                    </Text>
                    <Text
                        variant={"text2Xl"}
                        fontWeight={"500"}
                        color={"gray700"}
                    >
                        {user ? (user.gender === GENDER.male ? userCardText.MR : userCardText.MS) : ""}
                        {user && user.firstName ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1) : ""}
                        {" "}
                        {user && user.lastName ? user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1) : ""}
                    </Text>
                </Box>


            </Box>
        </Box>
    );
};

export default UserCard;
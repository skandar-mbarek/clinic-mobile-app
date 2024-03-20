import React from 'react';
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import UserCard from "@/components/user-components/user-card";

const HomeScreen = () => {

    return (
        <SafeAreaWrapper>
            <UserCard/>
        </SafeAreaWrapper>
    );
};

export default HomeScreen;
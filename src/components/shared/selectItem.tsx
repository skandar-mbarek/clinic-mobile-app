import React from 'react';
import theme from "@/utils/theme";
import {SelectList, SelectListProps} from "react-native-dropdown-select-list";
import {colors} from "@/utils/theme/colors";


interface SelectItemProps extends SelectListProps {

}

const SelectItem = ({...rest}: SelectItemProps) => {

    return (


        <SelectList
            {...rest}


            boxStyles={{
                backgroundColor: colors.gray200,
                height: 50,
                elevation: 1,
                borderRadius: 10,
                marginVertical: 3,
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.gray500


            }}
            inputStyles={{
                flex: 1,
                fontSize: 16,
                marginLeft: 5,
                color: theme.colors.gray700,
                fontFamily: "monospace"
            }}
            dropdownStyles={{
                borderRadius: 10,
                marginTop: 0,
                backgroundColor: colors.gray200,
                borderColor: colors.gray500,
                elevation: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
            dropdownTextStyles={{
                flex: 1,
                fontSize: 16,
                marginLeft: 5,
                color: theme.colors.gray700,
                fontFamily: "monospace"
            }}
            dropdownItemStyles={{
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: colors.gray500,
                alignItems: "center",
                justifyContent: "center",
            }}

        />
    );
};

export default SelectItem;
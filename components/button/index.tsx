import React from "react";
import { Flow } from "react-native-animated-spinkit";
import CustomPressable from "../pressible";
import { CustomText } from "../text";

type ICustomButtonProps = {
  isLoading?: boolean;
  buttonText: string;
  disabled?: boolean;
  onPress?: () => void;
};
const CustomButton = ({
  isLoading,
  buttonText,
  disabled,
  onPress,
  ...rest
}: ICustomButtonProps) => {
  return (
    <CustomPressable disabled={disabled} {...rest} onPress={onPress}>
      {isLoading ? (
        <Flow color="white" size={50} />
      ) : (
        <CustomText
          customClassName="text-center text-white"
          fontFamily="PoppinsMedium"
        >
          {buttonText}
        </CustomText>
      )}
    </CustomPressable>
  );
};

export default CustomButton;

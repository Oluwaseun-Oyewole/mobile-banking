import classNames from "classnames";
import React from "react";
import { Flow } from "react-native-animated-spinkit";
import CustomPressable from "../pressible";
import { CustomText } from "../text";

type ICustomButtonProps = {
  isLoading?: boolean;
  buttonText: string;
  disabled?: boolean;
  customClassName?: string;
  textClassName?: string;
  onPress?: () => void;
};
const CustomButton = ({
  isLoading,
  buttonText,
  disabled,
  customClassName,
  textClassName,
  onPress,
  ...rest
}: ICustomButtonProps) => {
  return (
    <CustomPressable
      disabled={disabled}
      {...rest}
      onPress={onPress}
      customClassName={customClassName}
    >
      {isLoading ? (
        <Flow color="white" size={50} />
      ) : (
        <CustomText
          customClassName={classNames("text-center text-white", textClassName)}
          fontFamily="PoppinsMedium"
        >
          {buttonText}
        </CustomText>
      )}
    </CustomPressable>
  );
};

export default CustomButton;

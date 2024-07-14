import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { Pressable, PressableProps } from "react-native";

type ICustomPressableProps = PressableProps &
  PropsWithChildren & { customClassName?: string; disabled?: boolean };

const CustomPressable = ({
  children,
  customClassName,
  disabled,
  ...rest
}: ICustomPressableProps) => {
  return (
    <Pressable
      {...rest}
      className={classNames(
        "bg-primary rounded-2xl py-4 items-center justify-center w-full",
        customClassName
      )}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;

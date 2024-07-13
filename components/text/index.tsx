import classNames from "classnames";
import { Text, type TextProps } from "react-native";

export type CustomTextProps = TextProps & {
  fontFamily?: string;
  customClassName?: string;
};

export function CustomText({
  fontFamily,
  customClassName,
  ...rest
}: CustomTextProps) {
  return (
    <Text
      className={classNames("", customClassName)}
      {...rest}
      style={{ fontFamily: fontFamily ? fontFamily : "PoppinsRegular" }}
    />
  );
}

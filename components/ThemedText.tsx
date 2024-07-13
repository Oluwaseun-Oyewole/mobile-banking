import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {};

export function ThemedText({ ...rest }: ThemedTextProps) {
  return <Text {...rest} />;
}

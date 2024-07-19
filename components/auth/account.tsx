import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { CustomText } from "../text";

const Account = ({
  linkText,
  text,
  url,
}: {
  linkText: string;
  text: string;
  url: string;
}) => {
  return (
    <View className="flex-row items-center justify-center py-10">
      <CustomText fontFamily="PoppinsMedium">{text}</CustomText>
      <CustomText
        className="pl-2 text-primary text-center"
        fontFamily="PoppinsBold"
      >
        <Link href={url}>{linkText}</Link>
      </CustomText>
    </View>
  );
};

export default Account;

import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { CustomText } from "../text";

type IAuthGreeting = {
  heading: string;
  body: string;
  imagePath: string;
};
const AuthGreeting = ({ heading, body, imagePath }: IAuthGreeting) => {
  return (
    <View className="pt-5">
      <CustomText className="text-primary text-2xl" fontFamily="PoppinsBold">
        {heading}
      </CustomText>
      <CustomText fontFamily="PoppinsMedium" customClassName="pt-1">
        {body}
      </CustomText>
      <View className="w-full items-center justify-center my-10">
        <Image
          className="h-[150px] w-[195px]"
          placeholder="illustration icon"
          contentFit="cover"
          transition={1000}
          source={imagePath}
        />
      </View>
    </View>
  );
};

export default AuthGreeting;

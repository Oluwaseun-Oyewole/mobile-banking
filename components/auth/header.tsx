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
    <View className="pt-6">
      <CustomText className="text-primary text-2xl" fontFamily="PoppinsBold">
        {heading}
      </CustomText>
      <CustomText fontFamily="PoppinsMedium" customClassName="pt-1">
        {body}
      </CustomText>
      <View className="items-center justify-center my-7 h-[125px]">
        <Image
          className="w-[150px] h-full"
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

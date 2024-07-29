import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const NotificationDetails = () => {
  const { detail } = useLocalSearchParams();
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="mt-4">
        <View className="h-[70vh] items-center justify-center w-full">
          <Image
            className="h-[230px] w-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/success.png")}
          />
          <CustomText
            customClassName="pt-10 text-xl"
            fontFamily="PoppinsMedium"
          >
            {detail}
          </CustomText>
        </View>
      </View>
    </MainWrapper>
  );
};

export default NotificationDetails;

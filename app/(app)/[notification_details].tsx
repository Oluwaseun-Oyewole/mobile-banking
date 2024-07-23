import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";

const NotificationDetails = () => {
  const { detail } = useLocalSearchParams();
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="mt-4">
        <CustomText>{detail}</CustomText>
      </View>
    </MainWrapper>
  );
};

export default NotificationDetails;

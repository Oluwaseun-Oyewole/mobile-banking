import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import React from "react";
import { View } from "react-native";

const Exchange = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="bg-white flex-1">
        <CustomText>Exchange Rate</CustomText>
      </View>
    </MainWrapper>
  );
};

export default Exchange;

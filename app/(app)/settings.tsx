import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import React from "react";
import { View } from "react-native";

const Settings = () => {
  return (
    <MainWrapper>
      <View className=" bg-red-500">
        <CustomText>Settings</CustomText>
      </View>
    </MainWrapper>
  );
};

export default Settings;

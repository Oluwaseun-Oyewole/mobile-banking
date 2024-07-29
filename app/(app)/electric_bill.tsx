import MainWrapper from "@/components/main/wrapper";
import React, { useState } from "react";
import { View } from "react-native";

const ElectricBill = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="flex-row items-center pt-3"></View>
    </MainWrapper>
  );
};

export default ElectricBill;

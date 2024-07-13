import React, { PropsWithChildren } from "react";
import { View } from "react-native";

const AuthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <View className="b h-[100%]">
      <View className="px-8 bg-gray-3s00">{children}</View>
    </View>
  );
};

export default AuthWrapper;

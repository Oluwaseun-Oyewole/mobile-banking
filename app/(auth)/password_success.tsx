import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const PasswordSuccess = () => {
  const { push } = useRouter();
  return (
    <AuthWrapper backgroundColor="#fff">
      <View className="h-full items-center justify-center">
        <Image
          className="h-[180px] w-[180px]"
          placeholder="illustration icon"
          contentFit="cover"
          transition={1000}
          source={require("@/assets/images/success.png")}
        />
        <CustomText
          customClassName="text-primary pt-6 text-lg"
          fontFamily="PoppinsBold"
        >
          Changed password successfully
        </CustomText>
        <CustomText customClassName="py-5" fontFamily="PoppinsMedium">
          You have successfully change password. Please use the new password
          when Sign in.
        </CustomText>

        <CustomButton buttonText="Ok" onPress={() => push(Routes.login)} />
      </View>
    </AuthWrapper>
  );
};

export default PasswordSuccess;

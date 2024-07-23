import CustomButton from "@/components/button";
import { CustomText } from "@/components/text";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const CustomSuccess = ({
  imagePath,
  title,
  description,
  buttonText,
  redirectRoute,
}: {
  imagePath: string;
  title: string;
  description: string;
  buttonText: string;
  redirectRoute: string;
}) => {
  const { push } = useRouter();
  return (
    <View className="h-[70vh] items-center justify-center">
      <Image
        className="h-[180px] w-[180px]"
        placeholder="illustration icon"
        contentFit="cover"
        transition={1000}
        source={imagePath}
      />
      <CustomText
        customClassName="text-primary pt-6 text-lg"
        fontFamily="PoppinsBold"
      >
        {title}
      </CustomText>
      <CustomText customClassName="py-5 text-center" fontFamily="PoppinsMedium">
        {description}
      </CustomText>

      <CustomButton
        buttonText={buttonText}
        onPress={() => push(redirectRoute)}
      />
    </View>
  );
};

export default CustomSuccess;

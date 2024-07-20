import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const settings = [
  { title: "Password", link: Routes.password_change },
  { title: "Touch ID" },
  { title: "Languages", link: Routes.language },
  { title: "App information", link: Routes.app_info },
  { title: "Customer care", phone: "0908729983" },
];
const Settings = () => {
  return (
    <MainWrapper height={150} backgroundColor="#fff">
      <View className="relative ">
        <View className="absolute items-center justify-center h-[100px] w-full -top-[60px]">
          <Image
            className="w-[100px] h-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/pro.svg")}
          />
        </View>
        <View className="pt-14">
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="text-xl text-primary text-center"
          >
            Seun Samuel
          </CustomText>
        </View>

        <View className="pt-10">
          {settings?.map((setting, index) => {
            return (
              <View key={index} className="pb-5">
                <View className="flex-row items-center justify-between border-b-2 border-gray-100 pb-4">
                  <CustomText fontFamily="PoppinsMedium">
                    {setting?.title}
                  </CustomText>
                  {setting?.link && (
                    <CustomText>
                      <Link href={`${setting?.link}`}>
                        <Ionicons
                          name="arrow-forward-sharp"
                          className="font-black"
                          size={15}
                        />
                      </Link>
                    </CustomText>
                  )}
                  {setting?.phone && (
                    <CustomText
                      fontFamily="PoppinsMedium"
                      customClassName="text-primary"
                    >
                      {setting?.phone}
                    </CustomText>
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </MainWrapper>
  );
};

export default Settings;

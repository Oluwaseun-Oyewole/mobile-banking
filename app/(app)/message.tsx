import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { truncate } from "@/helper";
import { messages } from "@/helper/constants";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

const Messages = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="w-full gap-4 pt-4">
        {messages?.map((message, index) => {
          return (
            <View
              key={index}
              className="w-full flex-row items-center justify-between px-3 h-[100px] rounded-2xl bg-primary4"
            >
              <View className="flex-row items-center gap-4">
                <View className="h-[40px]">
                  <Image
                    className="w-[40px] h-full"
                    placeholder="illustration icon"
                    contentFit="cover"
                    transition={1000}
                    source={message?.imagePath}
                  />
                </View>
                <View className="">
                  <View>
                    <CustomText customClassName="" fontFamily="PoppinsBold">
                      {message?.title}
                    </CustomText>
                    <CustomText customClassName="text-neutral1">
                      {truncate(message?.details, 25)}
                    </CustomText>
                  </View>
                </View>
              </View>

              <View>
                <CustomText
                  customClassName="text-xs pt-[5px] text-neutral2"
                  fontFamily="PoppinsMedium"
                >
                  {message?.date}
                </CustomText>
              </View>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default Messages;

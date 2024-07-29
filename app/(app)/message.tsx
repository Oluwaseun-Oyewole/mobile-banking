import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { truncate } from "@/helper";
import { messages } from "@/helper/constants";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

const Messages = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="w-full gap-4">
        {messages?.map((message, index) => {
          return (
            <View
              key={index}
              className="w-full flex-row items-center justify-between px-3 h-[100px] bg-primary4"
              style={styles.card}
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

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    elevation: 2,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
});

export default Messages;

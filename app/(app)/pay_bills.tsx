import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { payBillsArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const PayBills = () => {
  const { push } = useRouter();
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="w-full flex-wrap">
        {payBillsArrays?.map((cards, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => push(cards?.link)}
              className="py-2"
            >
              <View className="w-full flex-row justify-between px-4 items-center h-[120px] rounded-2xl bg-gray-100">
                <View>
                  <CustomText
                    customClassName="text-lg"
                    fontFamily="PoppinsBold"
                  >
                    {cards?.title}
                  </CustomText>
                  <CustomText
                    customClassName="text-xs pt-[5px] text-neutral2"
                    fontFamily="PoppinsMedium"
                  >
                    {cards?.description}
                  </CustomText>
                </View>

                <View className="h-[75px]">
                  <Image
                    className="w-[75px] h-full"
                    placeholder="illustration icon"
                    contentFit="cover"
                    transition={1000}
                    source={cards?.imagePath}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default PayBills;

const styles = StyleSheet.create({});

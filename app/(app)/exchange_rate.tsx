import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { exchangeRateArray } from "@/helper/constants";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

const ExchangeRate = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="bg-white">
        <View className="flex-row pt-2 pb-6">
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="w-[60%] text-neutral3"
          >
            Country
          </CustomText>
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="w-[25%] text-neutral3"
          >
            Buy
          </CustomText>
          <View className="w-[15%]">
            <CustomText
              fontFamily="PoppinsBold"
              customClassName="text-neutral3"
            >
              Sell
            </CustomText>
          </View>
        </View>
        {exchangeRateArray?.map((exchange, index) => {
          return (
            <View key={index} className="pb-4">
              <View className="flex-row items-center border-b-2 border-gray-100 pb-3">
                <View className="flex-row w-[60%] items-center">
                  <Image
                    className="w-[40px] h-[30px]"
                    placeholder="illustration icon"
                    contentFit="cover"
                    transition={1000}
                    source={exchange.imageURI}
                  />
                  <CustomText customClassName="pl-4" fontFamily="PoppinsMedium">
                    {exchange?.countryName}
                  </CustomText>
                </View>
                <CustomText
                  customClassName="w-[25%]"
                  fontFamily="PoppinsMedium"
                >
                  {exchange?.buy}
                </CustomText>
                <View className="w-[15%]">
                  <CustomText
                    customClassName="text-primary"
                    fontFamily="PoppinsMedium"
                  >
                    {exchange?.sell}
                  </CustomText>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default ExchangeRate;

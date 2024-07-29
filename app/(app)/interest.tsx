import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { interestArray } from "@/helper/constants";
import React from "react";
import { View } from "react-native";

const Interest = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="pt-6">
        <View className="flex-row pb-6">
          <CustomText fontFamily="PoppinsBold" customClassName="w-[60%] ">
            Interest Kind
          </CustomText>
          <CustomText fontFamily="PoppinsBold" customClassName="w-[25%] ">
            Deposit
          </CustomText>
          <View className="w-[15%]">
            <CustomText fontFamily="PoppinsBold" customClassName="">
              Rate
            </CustomText>
          </View>
        </View>
        <View className="mt-2">
          {interestArray?.map((interest, index) => {
            return (
              <View key={index} className="pb-4 pt-1">
                <View className="flex-row items-center border-b-2 border-gray-100 pb-3">
                  <CustomText customClassName="w-[60%]">
                    {interest?.interestKind}
                  </CustomText>
                  <CustomText customClassName="w-[25%]">
                    {interest?.deposit}
                  </CustomText>
                  <View className="w-[15%]">
                    <CustomText customClassName="text-primary">
                      {interest?.rate}
                    </CustomText>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </MainWrapper>
  );
};

export default Interest;

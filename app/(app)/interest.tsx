import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { interestArray } from "@/helper/constants";
import React from "react";
import { View } from "react-native";

const Interest = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="">
        <View className="flex-row pb-6">
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="w-[60%] text-neutral3"
          >
            Interest Kind
          </CustomText>
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="w-[25%] text-neutral3"
          >
            Deposit
          </CustomText>
          <View className="w-[15%]">
            <CustomText
              fontFamily="PoppinsBold"
              customClassName="text-neutral3"
            >
              Rate
            </CustomText>
          </View>
        </View>
        {interestArray?.map((interest, index) => {
          return (
            <View key={index} className="pb-4">
              <View className="flex-row items-center border-b-2 border-gray-100 pb-3">
                <CustomText
                  customClassName="w-[60%]"
                  fontFamily="PoppinsMedium"
                >
                  {interest?.interestKind}
                </CustomText>
                <CustomText
                  customClassName="w-[25%]"
                  fontFamily="PoppinsMedium"
                >
                  {interest?.deposit}
                </CustomText>
                <View className="w-[15%]">
                  <CustomText
                    customClassName="text-primary"
                    fontFamily="PoppinsMedium"
                  >
                    {interest?.rate}
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

export default Interest;

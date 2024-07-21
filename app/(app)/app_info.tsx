import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { app_information } from "@/helper/constants";
import React from "react";
import { View } from "react-native";

const AppInformation = () => {
  return (
    <MainWrapper height={120} backgroundColor="#fff">
      <View>
        <CustomText
          fontFamily="PoppinsMedium"
          customClassName="text-lg text-center"
        >
          Mobile banking details
        </CustomText>

        <View className="pt-10">
          {app_information?.map((info, index) => {
            return (
              <View key={index} className="pb-5">
                <View className="flex-row items-center justify-between border-b-2 border-gray-100 pb-4">
                  <CustomText fontFamily="PoppinsMedium">
                    {info?.title}
                  </CustomText>

                  {info?.details && (
                    <CustomText
                      fontFamily="PoppinsMedium"
                      customClassName="text-primary"
                    >
                      {info?.details}
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

export default AppInformation;

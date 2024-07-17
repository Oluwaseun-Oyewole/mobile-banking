import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import React from "react";
import { View } from "react-native";

const Interest = () => {
  const interestArray = new Array(10).fill({
    interest_kind: "individual interest",
    deposit: "1M",
    rate: "50%",
  });

  return (
    <MainWrapper>
      <View className="bg-green-500">
        {interestArray?.map((item, index) => {
          return (
            <View key={index}>
              <View>
                <CustomText>Interest Kind</CustomText>
                <CustomText>{item?.interest_kind}</CustomText>
              </View>

              <View>
                <CustomText>Deposit</CustomText>
                <CustomText>{item?.deposit}</CustomText>
              </View>

              <View>
                <CustomText>Rate</CustomText>
                <CustomText
                  className="text-primary1"
                  fontFamily="PoppinsMedium"
                >
                  {item?.rate}
                </CustomText>
                0
              </View>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default Interest;

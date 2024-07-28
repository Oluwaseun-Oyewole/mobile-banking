import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { accounts } from "@/helper/constants";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const width = Dimensions.get("window").width;

export const AccountComponent = () => {
  return (
    <View>
      <View className="h-[220px] items-center justify-center">
        <View className="h-[100px]">
          <Image
            className="w-[100px] h-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/pro.svg")}
          />
        </View>
        <CustomText
          customClassName="pt-6 text-primary"
          fontFamily="PoppinsBold"
        >
          Dolapo Popola
        </CustomText>
      </View>
      {accounts?.map((account, index) => {
        return (
          <View
            key={index}
            className="my-2 rounded-lg py-6 px-4"
            style={styles.account_cards}
          >
            <View className="flex-row justify-between items-center">
              <CustomText
                customClassName="text-[17px]"
                fontFamily="PoppinsMedium"
              >
                {account.title}
              </CustomText>
              <CustomText
                customClassName="text-[15px]"
                fontFamily="PoppinsMedium"
              >
                {account.accountNumber}
              </CustomText>
            </View>

            <View className="flex-row justify-between items-center py-2">
              <CustomText
                customClassName="text-gray-500"
                fontFamily="PoppinsMedium"
              >
                Available balance
              </CustomText>
              <CustomText
                customClassName="text-primary"
                fontFamily="PoppinsMedium"
              >
                {formatCurrency(account.balance)}
              </CustomText>
            </View>

            <View className="flex-row justify-between items-center">
              <CustomText
                fontFamily="PoppinsMedium"
                customClassName="text-gray-500"
              >
                Branch
              </CustomText>
              <CustomText
                fontFamily="PoppinsMedium"
                customClassName="text-primary"
              >
                {account.branch}
              </CustomText>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
  },
  account_cards: {
    borderRadius: 20,
    borderCurve: "continuous",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
    borderWidth: 0.4,
    borderColor: "#cccccc",
  },
});

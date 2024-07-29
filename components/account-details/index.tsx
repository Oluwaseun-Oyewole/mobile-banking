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
          customClassName="pt-6 
          "
          fontFamily="PoppinsBold"
        >
          Dolapo Popola
        </CustomText>
      </View>
      {accounts?.map((account, index) => {
        return (
          <View
            key={index}
            className="my-2 rounded-lg py-7 px-4"
            style={styles.account_cards}
          >
            <View className="flex-row justify-between items-center">
              <CustomText
                customClassName="text-[17px]"
                fontFamily="PoppinsBold"
              >
                {account.title}
              </CustomText>
              <CustomText customClassName="text-[15px]">
                {account.accountNumber}
              </CustomText>
            </View>

            <View className="flex-row justify-between items-center py-2">
              <CustomText>Available balance</CustomText>
              <CustomText>{formatCurrency(account.balance)}</CustomText>
            </View>

            <View className="flex-row justify-between items-center">
              <CustomText>Branch</CustomText>
              <CustomText>{account.branch}</CustomText>
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
    borderRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    elevation: 3,
    paddingHorizontal: 15,
    marginBottom: 25,
    backgroundColor: "#fff",
  },
});

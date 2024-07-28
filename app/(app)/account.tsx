import { AccountComponent } from "@/components/account-details";
import CustomButton from "@/components/button";
import { CardComponent } from "@/components/card-account";
import MainWrapper from "@/components/main/wrapper";
import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

const Account = () => {
  const tabs = [
    {
      title: "Account",
      index: 1,
      component: <AccountComponent />,
      styles: { bg: "#3629B7" },
    },
    {
      title: "Card",
      index: 2,
      component: <CardComponent />,
      styles: { bg: "#F2F1F9", color: "#000" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="flex-row items-center gap-2 pt-3" style={styles.card}>
        {tabs?.map((tab, index) => {
          return (
            <View key={index} className="w-1/2">
              <TouchableOpacity
                onPress={() => {
                  setCurrentIndex(index);
                }}
              >
                <CustomButton
                  buttonText={tab.title}
                  customClassName={`${currentIndex} bg-[${tab.styles.bg}]`}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      <View className="pb-10">{tabs[currentIndex].component}</View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
  },
  account_cards: {
    borderRadius: 15,
    borderCurve: "continuous",
    shadowColor: "#cccccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
    borderWidth: 0.2,
    borderColor: "#3629B7",
  },
});
export default Account;

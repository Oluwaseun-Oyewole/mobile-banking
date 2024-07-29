import Electric from "@/components/bills/electric";
import CustomButton from "@/components/button";
import MainWrapper from "@/components/main/wrapper";
import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

const PaymentHistory = () => {
  const tabs = [
    {
      title: "Electric",
      index: 0,
      component: <Electric />,
      styles: { bg: "#3629B7" },
    },
    {
      title: "Water",
      index: 1,
      component: <Electric />,
      styles: { bg: "#F2F1F9", color: "#000" },
    },
    {
      title: "Mobile",
      index: 2,
      component: <Electric />,
      styles: { bg: "#F2F1F9", color: "#000" },
    },
    {
      title: "Internet",
      index: 3,
      component: <Electric />,
      styles: { bg: "#F2F1F9", color: "#000" },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="flex-row items-center pt-3">
        <FlatList
          data={tabs}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            // width: Dimensions.get("window").width,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                className="w-[120px] mx-[6px]"
                style={{
                  borderRadius: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setCurrentIndex(index);
                  }}
                >
                  <CustomButton
                    buttonText={item.title}
                    customClassName={`${
                      currentIndex === item.index
                        ? "bg-primary"
                        : "bg-gray-400 text-black"
                    }`}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <View className="pb-10">{tabs[currentIndex].component}</View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({});
export default PaymentHistory;

import Electric from "@/components/bills/electric";
import Internet from "@/components/bills/internet";
import CustomButton from "@/components/button";
import MainWrapper from "@/components/main/wrapper";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PaymentHistory = () => {
  const tabs = [
    {
      title: "Electric",
      index: 0,
      component: <Electric />,
    },
    {
      title: "Water",
      index: 1,
      component: <Internet />,
    },
    {
      title: "Mobile",
      index: 2,
      component: <Electric />,
    },
    {
      title: "Internet",
      index: 3,
      component: <Internet />,
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
                        : "bg-[#F2F1F9] text-black"
                    }`}
                    textClassName={
                      currentIndex === item.index ? "text-white" : "text-black"
                    }
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

export default PaymentHistory;

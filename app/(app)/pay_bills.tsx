import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { payBillsArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const PayBills = () => {
  const { push } = useRouter();
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="w-full flex-wrap mt-4">
        {payBillsArrays?.map((cards, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => push(cards?.link)}
              className="w-full flex-row justify-between px-4 items-center h-[120px]"
              style={styles.card}
            >
              <View>
                <CustomText customClassName="text-lg" fontFamily="PoppinsBold">
                  {cards?.title}
                </CustomText>
                <CustomText
                  customClassName="text-xs pt-[5px] text-neutral2"
                  fontFamily="PoppinsMedium"
                >
                  {cards?.description}
                </CustomText>
              </View>

              <View className="h-[75px]">
                <Image
                  className="w-[75px] h-full"
                  placeholder="illustration icon"
                  contentFit="cover"
                  transition={1000}
                  source={cards?.imagePath}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default PayBills;

const styles = StyleSheet.create({
  card: {
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

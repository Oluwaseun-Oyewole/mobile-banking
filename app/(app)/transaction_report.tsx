import ATMCardComponent from "@/components/atm";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { images } from "@/helper/constants";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { useSharedValue, withSpring } from "react-native-reanimated";

const height = Math.floor(Dimensions.get("window").height * 0.23);

const todayTransactions = [
  {
    title: "Water Bill",
    status: "Unsuccessful",
    amount: "-280",
    color: "red-500",
    imagePath: require("@/assets/images/water.svg"),
  },
  {
    title: "Income: Salary Oct",
    color: "primary",
    amount: "1200",
    imagePath: require("@/assets/images/income.svg"),
    status: "Unsuccessful",
  },
];

const yesterdayTransactions = [
  {
    title: "Income: Salary Oct",
    color: "primary",
    amount: "1200",
    imagePath: require("@/assets/images/income.svg"),
    status: "Unsuccessful",
  },
  {
    title: "Electric Bill",
    color: "red-500",
    amount: "-480",
    status: "Successfully",
    imagePath: require("@/assets/images/electric.svg"),
  },
  {
    title: "Income : Jane transfers",
    color: "primary",
    amount: "500",
    imagePath: require("@/assets/images/income_red.svg"),
    status: "successful",
  },
  {
    title: "Internet Bill",
    color: "red-500",
    amount: "-100",
    status: "Successful",
    imagePath: require("@/assets/images/internet.svg"),
  },
];

const Transaction_report = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [
      [60, 60, 60],
      [30, 30, 40],
      [60, 60, 60],
      [30, 30, 60],
      [60, 60, 100],
      [30, 50, 20],
      [30, 30, 120],
    ],
    barColors: ["#FF4267", "#FBB8FF", "#3629B7"],
    legend: [],
  };

  const animatedValueIndex = useSharedValue(0);
  const flingUp = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      if (animatedValueIndex.value > images.length) return;
      if (animatedValueIndex.value == 0) return;
      animatedValueIndex.value = withSpring(animatedValueIndex.value - 1, {
        damping: 10,
        stiffness: 40,
        mass: 2,
      });
    });

  const flingDown = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      if (animatedValueIndex.value === images.length) return;
      if (animatedValueIndex.value === images.length - 1) return;
      animatedValueIndex.value = withSpring(animatedValueIndex.value + 1, {
        damping: 10,
        stiffness: 40,
        mass: 2,
      });
    });

  return (
    <MainWrapper backgroundColor="#fff" height={110}>
      <View style={styles.card_container}>
        <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
          <View className="items-center justify-center">
            {images?.map((card, index) => (
              <ATMCardComponent
                key={index}
                index={index}
                animatedValueIndex={animatedValueIndex}
                card={card}
              />
            ))}
          </View>
        </GestureDetector>
      </View>

      <View className="py-10">
        <CustomText fontFamily="PoppinsMedium" customClassName="text-sm pt-3">
          Balances
        </CustomText>
        <View className="flex-row items-center pt-2">
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="text-3xl text-primary"
          >
            1000
          </CustomText>
          <CustomText
            customClassName="text-[10px] pl-1"
            fontFamily="PoppinsMedium"
          >
            USD
          </CustomText>
        </View>
        <View
          style={{
            marginTop: 10,
            overflow: "hidden",
          }}
        >
          <StackedBarChart
            data={data}
            withHorizontalLabels={false}
            width={Dimensions.get("window").width}
            height={200}
            hideLegend
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              barPercentage: 0.4,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              // labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForBackgroundLines: {
                strokeWidth: 0.4,
              },
              stackedBar: false,
              propsForVerticalLabels: {
                children: (
                  <View className="bg-red-500 w-[100px] h-[40px]">
                    <CustomText>Testing</CustomText>
                  </View>
                ),
                fontFamily: "monospace",
                fontSize: 14,
              },
              barRadius: 0,
              linejoinType: "round",
            }}
            style={{
              marginLeft: -75,
              paddingLeft: 16,
              overflow: "hidden",
            }}
          />
        </View>
      </View>

      <View>
        <CustomText customClassName="text-[12px]">Today</CustomText>
        {todayTransactions?.map((transaction, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center justify-between border-b-[0.6px] border-gray-300"
            >
              <View className="flex-row items-center">
                <View>
                  <View className="h-[60px]">
                    <Image
                      className="w-[60px] h-full"
                      placeholder="illustration icon"
                      contentFit="cover"
                      transition={1000}
                      source={transaction?.imagePath}
                    />
                  </View>
                </View>
                <View>
                  <CustomText
                    customClassName="text-[12px]"
                    fontFamily="PoppinsMedium"
                  >
                    {transaction?.title}
                  </CustomText>
                  <CustomText
                    customClassName="text-[12px] text-neutral2"
                    fontFamily="PoppinsMedium"
                  >
                    {transaction?.status}
                  </CustomText>
                </View>
              </View>
              <CustomText
                customClassName={`text-${transaction.color}`}
                fontFamily="PoppinsMedium"
              >
                {formatCurrency(transaction?.amount as string)}
              </CustomText>
            </View>
          );
        })}
      </View>

      <View className="py-8">
        <CustomText customClassName="text-[12px]">Yesterday</CustomText>
        {yesterdayTransactions?.map((transaction, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center justify-between border-b-[0.6px] border-gray-300"
            >
              <View className="flex-row items-center">
                <View>
                  <View className="h-[60px]">
                    <Image
                      className="w-[60px] h-full"
                      placeholder="illustration icon"
                      contentFit="cover"
                      transition={1000}
                      source={transaction?.imagePath}
                    />
                  </View>
                </View>
                <View>
                  <CustomText
                    customClassName="text-[12px]"
                    fontFamily="PoppinsMedium"
                  >
                    {transaction?.title}
                  </CustomText>
                  <CustomText
                    customClassName="text-[12px] text-neutral2"
                    fontFamily="PoppinsMedium"
                  >
                    {transaction?.status}
                  </CustomText>
                </View>
              </View>
              <CustomText
                customClassName={`text-${transaction.color}`}
                fontFamily="PoppinsMedium"
              >
                {formatCurrency(transaction?.amount as string)}
              </CustomText>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  card_container: {
    height: height - 35,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 5,
  },

  atm_card: {
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: "#b9b9b9",
  },
  image_card: {
    position: "absolute",
  },
});

export default Transaction_report;

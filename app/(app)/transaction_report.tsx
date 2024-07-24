import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";

const images = [
  { imagePath: require("@/assets/images/visa.png") },
  // { imagePath: require("@/assets/images/orange_visa.png") },
];

const transactions = [
  {
    title: "Water Bill",
    status: "Unsuccessfully",
    amount: "-280",
    color: "red-500",
    time: "Today",
    imagePath: require("@/assets/images/water.svg"),
  },
  {
    title: "Income: Salary Oct",
    color: "primary",
    amount: "1200",
    time: "Yesterday",
    imagePath: require("@/assets/images/income.svg"),
    status: "Unsuccessfully",
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
    status: "Unsuccessfully",
  },
  {
    title: "Internet Bill",
    color: "red-500",
    amount: "-100",
    status: "Successfully",
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

  return (
    <MainWrapper backgroundColor="#fff">
      <View className="h-[270px]">
        {images?.map((image, index) => {
          return (
            <ImageBackground
              key={index}
              source={image.imagePath}
              className="flex-1 items-center justify-center"
            >
              <View className=" w-full p-6">
                <View className="">
                  <CustomText
                    fontFamily="PoppinsBold"
                    customClassName="text-white text-lg"
                  >
                    Seun Samuel
                  </CustomText>
                  <CustomText
                    fontFamily="PoppinsMedium"
                    customClassName="text-white pt-8"
                  >
                    Amazon Platinum
                  </CustomText>
                  <CustomText
                    fontFamily="PoppinsMedium"
                    customClassName="text-white pt-2"
                  >
                    2020 3456 **** **** 8783
                  </CustomText>
                  <CustomText
                    fontFamily="PoppinsBold"
                    customClassName="text-white pt-4 text-lg"
                  >
                    {formatCurrency(78787)}
                  </CustomText>
                </View>
              </View>
            </ImageBackground>
          );
        })}
      </View>

      <View>
        <CustomText fontFamily="PoppinsMedium" customClassName="text-sm">
          Balances
        </CustomText>
        <View className="flex-row items-center pt-2">
          <CustomText
            fontFamily="PoppinsBold"
            customClassName="text-2xl text-primary"
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
        <View style={{ marginTop: 10, overflow: "hidden" }}>
          <StackedBarChart
            data={data}
            withHorizontalLabels={false}
            width={Dimensions.get("window").width}
            height={200}
            hideLegend
            chartConfig={{
              propsForLabels: { fontFamily: "PoppinsMedium", fontSize: 13 },
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 2,
              barPercentage: 0.35,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 10 },
              propsForBackgroundLines: { strokeWidth: 0.7 },
              propsForDots: { r: 1000, strokeWidth: "2", stroke: "#fffff" },
              stackedBar: false,
            }}
            style={{
              marginLeft: -75,
              paddingLeft: 16,
              overflow: "hidden",
            }}
            // decorator={({ width, height, data }) => {
            //   const xAxisLabels = [0, 20, 40, 60, 80, 100]; // Customize y-axis labels as needed
            //   return (
            //     <Svg
            //       height={height}
            //       width={width}
            //       style={{ position: "absolute", left: -30 }}
            //     >
            //       <G>
            //         {xAxisLabels.map((label, index) => (
            //           <CustomText key={index}>Label -- {label}</CustomText>
            //         ))}
            //       </G>
            //     </Svg>
            //   );
            // }}
          />
        </View>
      </View>

      <View className="py-12">
        {transactions?.map((transaction, index) => {
          return (
            <View key={index} className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View>
                  <CustomText customClassName="text-[10px]">
                    {transaction?.time}
                  </CustomText>
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

export default Transaction_report;

import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import classNames from "classnames";
import React from "react";
import { StyleSheet, View } from "react-native";

const electricArray = [
  {
    month: "October",
    date: "30|10|2019",
    status: "Successful",
    amount: 840,
  },

  {
    month: "September",
    date: "5|06|2021",
    status: "Unsuccessful",
    amount: 500,
  },

  {
    month: "August",
    date: "30|12|2022",
    status: "Successful",
    amount: 240,
  },
  {
    month: "October",
    date: "30|10|2019",
    status: "Successful",
    amount: 840,
  },

  {
    month: "September",
    date: "5|06|2021",
    status: "Unsuccessful",
    amount: 500,
  },

  {
    month: "August",
    date: "30|12|2022",
    status: "Successful",
    amount: 240,
  },
];
type IStatus = "Successful" | "Unsuccessful";
const Electric = () => {
  const renderStatus = (status: IStatus) => {
    let classStyles = "";
    if (status === "Successful") return (classStyles += "text-primary");
    return (classStyles += "text-red-600");
  };
  return (
    <View className="mt-4">
      {electricArray?.map((electric, index) => {
        return (
          <View key={index} style={styles.card}>
            <View className="flex-row items-center justify-between mt-4">
              <CustomText
                customClassName="text-gray-500"
                fontFamily="PoppinsMedium"
              >
                {electric.month}
              </CustomText>
              <CustomText
                customClassName="text-gray-500"
                fontFamily="PoppinsMedium"
              >
                {electric.date}
              </CustomText>
            </View>
            <View className="flex-row justify-between items-center py-4">
              <View className="flex-row items-center justify-between">
                <CustomText customClassName="text-gray-500">Status</CustomText>
                <CustomText
                  customClassName={classNames(
                    "pl-2 text-xs",
                    renderStatus(electric.status as IStatus)
                  )}
                  fontFamily="PoppinsMedium"
                >
                  {electric.status}
                </CustomText>
              </View>
              <View className="flex-row items-center justify-between">
                <CustomText customClassName="text-gray-500">Amount</CustomText>
                <CustomText
                  customClassName="pl-2 text-primary"
                  fontFamily="PoppinsMedium"
                >
                  {formatCurrency(electric.amount)}
                </CustomText>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Electric;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: "#b9b9b9",
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 25,
  },
});

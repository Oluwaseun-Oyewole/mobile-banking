import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import classNames from "classnames";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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
          <TouchableOpacity
            key={index}
            style={styles.card}
            className="bg-white"
          >
            <View className="flex-row items-center justify-between mt-4">
              <CustomText fontFamily="PoppinsMedium">
                {electric.month}
              </CustomText>
              <CustomText fontFamily="PoppinsMedium">
                {electric.date}
              </CustomText>
            </View>
            <View className="flex-row justify-between items-center py-4">
              <View className="flex-row items-center justify-between">
                <CustomText>Status</CustomText>
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
                <CustomText>Amount :</CustomText>
                <CustomText
                  customClassName="pl-1 text-primary"
                  fontFamily="PoppinsMedium"
                >
                  {formatCurrency(electric.amount)}
                </CustomText>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Electric;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 8,
    shadowColor: "#333",
    elevation: 5,
    paddingHorizontal: 15,
    marginTop: 25,
  },
});

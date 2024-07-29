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
    company: "Capi telecom",
  },

  {
    month: "September",
    date: "5|06|2021",
    status: "Unsuccessful",
    amount: 500,
    company: "MTN",
  },

  {
    month: "August",
    date: "30|12|2022",
    status: "Successful",
    amount: 240,
    company: "GLO",
  },
  {
    month: "October",
    date: "30|10|2019",
    status: "Successful",
    amount: 840,
    company: "Airtel",
  },

  {
    month: "August",
    date: "30|12|2022",
    status: "Successful",
    amount: 240,
  },
];
type IStatus = "Successful" | "Unsuccessful";
const Internet = () => {
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
            <View className="flex-row items-center justify-between">
              <CustomText fontFamily="PoppinsMedium">
                {electric.month}
              </CustomText>
              <CustomText fontFamily="PoppinsMedium">
                {electric.date}
              </CustomText>
            </View>
            <View className="flex-row justify-between items-center py-2">
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
            <View className="flex-row items-center mt-1">
              <CustomText>Company</CustomText>
              <CustomText
                customClassName="pl-2 text-primary"
                fontFamily="PoppinsMedium"
              >
                {electric.company}
              </CustomText>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Internet;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowColor: "#3629B7",
    borderWidth: 0.4,
    borderColor: "#3629B7",
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginTop: 25,
  },
});

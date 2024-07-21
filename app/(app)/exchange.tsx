import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

const Exchange = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object({});

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.login);
    resetForm({});
  };

  return (
    <MainWrapper backgroundColor="#fff">
      <View className="h-full">
        <View className="h-[200px]">
          <Image
            className="w-full h-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/exchanges.svg")}
          />
        </View>
        <View className="py-10">
          <Formik
            initialValues={{
              from: "",
              to: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Amount"
                    onChangeText={formik.handleChange("to")}
                    onBlur={formik.handleBlur("from")}
                    value={formik.values.from}
                    name="from"
                    arialLabel="Label for from"
                    arialLabelBy="From"
                    showLabel
                    showExchangeRate
                  />

                  <View className="flex-row items-center justify-center pt-5">
                    <Ionicons name="arrow-down" size={35} color="#444444" />
                    <Ionicons name="arrow-up" size={35} color="#FF4267" />
                  </View>

                  <View>
                    <CustomInput
                      placeholder="Amount"
                      onChangeText={formik.handleChange("to")}
                      onBlur={formik.handleBlur("to")}
                      value={formik.values.to}
                      name="from"
                      arialLabel="Label for to"
                      arialLabelBy="To"
                      showLabel
                      showExchangeRate
                    />
                  </View>

                  <View className="pt-10">
                    <CustomButton
                      buttonText="Exchange"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid}
                      onPress={formik.handleSubmit}
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </View>
    </MainWrapper>
  );
};

export default Exchange;

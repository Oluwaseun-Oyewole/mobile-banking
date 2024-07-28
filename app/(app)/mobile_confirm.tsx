import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

const Confirm = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object({
    sender: Yup.string().required("Sender is required"),
    amount: Yup.number().required("Amount is required"),
    phone: Yup.string().required("Phone number is required"),
    otp: Yup.string().required("OTP is required"),
  });
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    resetForm({});
    push(Routes.mobile_prepaid_success);
  };

  return (
    <MainWrapper backgroundColor="#fff">
      <View>
        <CustomText fontFamily="PoppinsMedium" customClassName="text-neutral2">
          Confirm transaction information
        </CustomText>
        <View className="pt-4">
          <Formik
            initialValues={{
              sender: "",
              phone: "",
              amount: "",
              otp: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Sender's name"
                    onChangeText={formik.handleChange("sender")}
                    onBlur={formik.handleBlur("sender")}
                    value={formik.values.sender}
                    name="sender"
                    showLabel
                    arialLabel="Label for from"
                    arialLabelBy="From"
                  />

                  <View className="py-2">
                    <CustomText customClassName="pb-1 text-gray-500">
                      To
                    </CustomText>
                    <CustomPhoneNumber formik={formik} />
                  </View>

                  <View className="pt-2">
                    <CustomInput
                      placeholder="Amount"
                      onChangeText={formik.handleChange("amount")}
                      onBlur={formik.handleBlur("amount")}
                      value={formik.values.amount}
                      name="amount"
                      showLabel
                      arialLabel="amount"
                      arialLabelBy="Amount"
                      keyboardType="numeric"
                    />
                  </View>

                  <View className="pt-6 flex-row items-center justify-between">
                    <View className="basis-[67%]">
                      <CustomInput
                        placeholder="OTP"
                        onChangeText={formik.handleChange("otp")}
                        onBlur={formik.handleBlur("otp")}
                        value={formik.values.otp}
                        name="otp"
                        showLabel
                        arialLabel="Get OTP to verify transaction"
                        arialLabelBy="Get OTP to verify transaction"
                      />
                    </View>

                    <View className="basis-[30%] mt-6">
                      <CustomButton
                        buttonText="Get OTP"
                        onPress={() => {}}
                        customClassName="text-xs"
                      />
                    </View>
                  </View>

                  <View className="pt-28">
                    <CustomButton
                      buttonText="Confirm"
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

export default Confirm;

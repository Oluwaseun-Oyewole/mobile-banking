import BiometricAuthentication from "@/components/biometric";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

const Confirm = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object({
    sender: Yup.string().required("Sender is required"),
    receiverName: Yup.string().required("Receiver's name is required"),
    amount: Yup.number().required("Amount is required"),
    cardNumber: Yup.number().required("Card number is required"),
    content: Yup.string().required("Content is required"),
  });
  const [verification, setVerification] = useState(false);
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.Home);
    resetForm({});
    setIsBiometricValid(false);
  };
  const [isBiometricValid, setIsBiometricValid] = useState(false);
  const [isAuthValid, setIsAuthValid] = useState(false);

  const checkAuthMethod = (verificationType: "OTP" | "Bio") => {
    if (verificationType === "OTP" || verificationType === "Bio") {
      setIsAuthValid(true);
    }
    return false;
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
              receiverName: "",
              cardNumber: "",
              content: "",
              amount: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Sender"
                    onChangeText={formik.handleChange("sender")}
                    onBlur={formik.handleBlur("sender")}
                    value={formik.values.sender}
                    name="sender"
                    showLabel
                    arialLabel="Label for sender"
                    arialLabelBy="Sender"
                  />
                  <View className="py-2">
                    <CustomInput
                      placeholder="Receiver's name"
                      onChangeText={formik.handleChange("receiverName")}
                      onBlur={formik.handleBlur("receiverName")}
                      value={formik.values.receiverName}
                      name="receiverName"
                      showLabel
                      arialLabel="Label for to"
                      arialLabelBy="To"
                    />
                  </View>

                  <View>
                    <CustomInput
                      placeholder="Card number"
                      onChangeText={formik.handleChange("cardNumber")}
                      onBlur={formik.handleBlur("cardNumber")}
                      value={formik.values.cardNumber}
                      name="cardNumber"
                      showLabel
                      arialLabel="Card number"
                      arialLabelBy="Card number"
                      keyboardType="numeric"
                    />
                  </View>
                  <View className="py-3">
                    <CustomInput
                      placeholder="Transaction fee"
                      onChangeText={formik.handleChange("transaction_fee")}
                      onBlur={formik.handleBlur("transaction_fee")}
                      value="$100"
                      name="transaction_fee"
                      showLabel
                      arialLabel="Transaction fee"
                      arialLabelBy="Transaction fee"
                      editable={false}
                      keyboardType="numeric"
                    />
                  </View>

                  <View className="py-3">
                    <CustomInput
                      placeholder="Content"
                      onChangeText={formik.handleChange("content")}
                      onBlur={formik.handleBlur("content")}
                      value={formik.values.content}
                      name="content"
                      showLabel
                      arialLabel="Content"
                      arialLabelBy="Content"
                    />
                  </View>

                  <View className="py-3">
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

                  {!verification && (
                    <View className="py-3 flex-row items-center justify-between">
                      <View className="basis-[67%]">
                        <CustomInput
                          placeholder="OTP"
                          onChangeText={formik.handleChange("otp")}
                          onBlur={formik.handleBlur("otp")}
                          //   value={formik.values.otp}
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
                  )}
                  <TouchableOpacity
                    onPress={() => setVerification(!verification)}
                    className=""
                  >
                    <CustomText
                      customClassName="text-sm text-primary"
                      fontFamily="PoppinsBold"
                    >
                      change verification
                    </CustomText>
                  </TouchableOpacity>

                  {verification && (
                    <BiometricAuthentication
                      setIsBiometricValid={setIsBiometricValid}
                    />
                  )}

                  <View className="py-10">
                    <CustomButton
                      buttonText="Confirm"
                      isLoading={formik.isSubmitting}
                      disabled={!formik.isValid || !isBiometricValid}
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

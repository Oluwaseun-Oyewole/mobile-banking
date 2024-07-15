import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const validationSchema = Yup.object({
    phone: Yup.string().required("Phone number is required"),
  });

  const stepTwoValidationSchema = Yup.object({
    code: Yup.string()
      .required("Phone number is required")
      .min(6, "Code must be 4 characters"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    console.log("values -- ", values);
    setCurrentStep(2);
    resetForm({});
  };

  const stepTwoSubmit = async (
    values: Record<string, any>,
    { resetForm }: any
  ) => {
    push(Routes.changePassword);
    setCurrentStep(2);
  };

  if (currentStep === 2) {
    return (
      <AuthWrapper>
        <View className="flex-1 bg-red-500">
          <CustomText
            customClassName="text-[#979797] pb-3"
            fontFamily="PoppinsMedium"
          >
            Type a code
          </CustomText>

          <Formik
            initialValues={{
              code: "",
            }}
            validationSchema={stepTwoValidationSchema}
            onSubmit={stepTwoSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <View className="flex-row gap-2">
                    <View className="basis-[70%]">
                      <CustomInput
                        customClassName="w-full basis-[90%]"
                        id="code"
                        placeholder="code"
                        name="code"
                        onChangeText={formik.handleChange("code")}
                        onBlur={formik.handleBlur("code")}
                        value={formik.values.code}
                        arialLabelBy="code"
                        arialLabel="Label for code"
                        autoComplete="off"
                        inputMode="text"
                      />
                    </View>
                    <View className="basis-[30%]">
                      <CustomButton
                        buttonText="Resend"
                        isLoading={isLoading}
                        onPress={() => {}}
                      />
                    </View>
                  </View>

                  <View className="py-3">
                    <CustomText>
                      We texted you a code to verify your phone number (+84)
                      0398829xxx
                    </CustomText>
                    <CustomText customClassName="pt-2">
                      This code will expired 10 minutes after this message. If
                      you don't get a message
                    </CustomText>
                  </View>

                  <View className="pt-10">
                    <CustomButton
                      buttonText="Change password"
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
      </AuthWrapper>
    );
  }

  return (
    <AuthWrapper>
      <View className="flex-1 px-3 justify-center h-[40vh] shadow-xll">
        <CustomText customClassName="text-[#979797]" fontFamily="PoppinsMedium">
          Text your phone number
        </CustomText>

        <Formik
          initialValues={{
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
                <View className="py-4">
                  <CustomPhoneNumber formik={formik} />
                </View>
                <CustomText
                  customClassName="text-black pr-5"
                  fontFamily="PoppinsMedium"
                >
                  We have tested you a code to verify your phone number
                </CustomText>
                <View className="pt-10">
                  <CustomButton
                    buttonText="Send"
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
    </AuthWrapper>
  );
};

export default ForgotPassword;

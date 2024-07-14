import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

const ChangePassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object({
    phone: Yup.string().required("Phone number is required"),
  });

  const { push } = useRouter();

  const stepTwoValidationSchema = Yup.object({
    code: Yup.string()
      .required("Phone number is required")
      .min(6, "Code must be 4 characters"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.password_success);
    setCurrentStep(2);
    resetForm({});
  };

  // const schema = Yup.object().shape({
  //   otp: Yup.string()
  //     .required("OTP is required")
  //     .min(6, "OTP must be 6 digits"),
  //   password: Yup.string()
  //     .min(6, "Password should contain more than 6 characters")
  //     .required("Please provide a password"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password")], "Passwords must match")
  //     .required("Confirm password is required"),
  // });

  return (
    <AuthWrapper>
      <View className="h-full">
        <CustomText
          customClassName="text-[#979797] pb-3"
          fontFamily="PoppinsMedium"
        >
          Type your new password here
        </CustomText>

        <Formik
          initialValues={{
            code: "",
          }}
          validationSchema={stepTwoValidationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
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

                <CustomInput
                  customClassName="w-full basis-[90%] mt-5"
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

                <View className="pt-5">
                  <CustomButton
                    buttonText="Change Password"
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

export default ChangePassword;

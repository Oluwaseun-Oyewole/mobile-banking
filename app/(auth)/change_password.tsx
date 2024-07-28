import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

const ChangePassword = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password should contain more than 6 characters")
      .required("Please provide a password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.password_success);
    resetForm({});
  };

  return (
    <AuthWrapper backgroundColor="#fff">
      <View className="h-full pt-8">
        <CustomText
          customClassName="text-[#979797] pb-3"
          fontFamily="PoppinsMedium"
        >
          Type your new password here
        </CustomText>

        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
                <CustomInput
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                  arialLabelBy="Password"
                  arialLabel="Label for Password"
                  isPassword
                  autoComplete="off"
                  inputMode="text"
                  secureTextEntry
                  selectTextOnFocus={false}
                  contextMenuHidden={true}
                />

                <View className="pt-5">
                  <CustomInput
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    keyboardType="visible-password"
                    onChangeText={formik.handleChange("confirmPassword")}
                    onBlur={formik.handleBlur("confirmPassword")}
                    value={formik.values.confirmPassword}
                    arialLabelBy="ConfirmPassword"
                    arialLabel="Label for Confirm Password"
                    isPassword
                    autoComplete="off"
                    inputMode="text"
                    secureTextEntry
                    selectTextOnFocus={false}
                    contextMenuHidden={false}
                  />
                </View>

                <View className="pt-7">
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

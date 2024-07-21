import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { Routes } from "@/routes/routes";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

const PasswordChange = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(6, "Password should contain more than 6 characters")
      .required("Please provide a password"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.Home);
    resetForm({});
  };

  return (
    <MainWrapper backgroundColor="#fff">
      <View className="h-full pt-5">
        <Formik
          initialValues={{
            oldPassword: "",
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
                  placeholder="Recent password"
                  name="oldPassword"
                  onChangeText={formik.handleChange("oldPassword")}
                  onBlur={formik.handleBlur("oldPassword")}
                  value={formik.values.oldPassword}
                  arialLabelBy="OldPassword"
                  arialLabel="Label for Password"
                  isPassword
                  autoComplete="off"
                  inputMode="text"
                  secureTextEntry
                  selectTextOnFocus={false}
                  contextMenuHidden={true}
                  showLabel
                />

                <View className="py-4">
                  <CustomInput
                    id="password"
                    placeholder="New password"
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
                    showLabel
                  />
                </View>

                <CustomInput
                  id="confirmPassword"
                  placeholder="Confirm password"
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
                  showLabel
                />

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
    </MainWrapper>
  );
};

export default PasswordChange;

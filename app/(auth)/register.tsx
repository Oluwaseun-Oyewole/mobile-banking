import Account from "@/components/auth/account";
import AuthGreeting from "@/components/auth/header";
import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import Checkbox from "expo-checkbox";
import { Formik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

const Registration = () => {
  const [isChecked, setChecked] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name Required")
      .min(4, "Name must be at least 4 characters"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[!@#$%^&*:;'><.,/?}{[\]\-_+=])(?=.{8,})/,
        "Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    console.log("values", values);
    resetForm({});
  };

  return (
    <AuthWrapper>
      <AuthGreeting
        heading="Welcome to us,"
        body="Hello there, create new account"
        imagePath={require("@/assets/images/register.svg")}
      />

      <Formik
        initialValues={{
          name: "",
          phone: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => {
          return (
            <>
              <CustomInput
                placeholder="Seun Oyewole"
                onChangeText={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
                name="name"
                arialLabel="Label for name"
                arialLabelBy="Name"
              />
              <CustomPhoneNumber formik={formik} />
              <View className="mt-3">
                <CustomInput
                  id="password"
                  placeholder="Testing123@"
                  name="password"
                  keyboardType="visible-password"
                  onChangeText={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                  arialLabelBy="Password"
                  arialLabel="Label for Password"
                  isPassword
                  autoComplete="off"
                  inputMode="text"
                />
              </View>

              <View className="py-5 flex-row items-start gap-2">
                <View>
                  <Checkbox
                    className="mt-[4px] font-light"
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "#3629B7" : "#CACACA"}
                  />
                </View>

                <View>
                  <CustomText customClassName="text-sm">
                    By creating an account, you agree to our
                  </CustomText>

                  <CustomText
                    customClassName="pl-1 text-primary text-sm pt-1"
                    fontFamily="PoppinsBold"
                  >
                    Terms and Conditions
                  </CustomText>
                </View>
              </View>

              <View>
                <CustomButton
                  buttonText="Sign Up"
                  isLoading={formik.isSubmitting}
                  disabled={!formik.isValid || !isChecked}
                  onPress={formik.handleSubmit}
                />
              </View>
            </>
          );
        }}
      </Formik>

      <View className="my-5">
        <Account
          text="Have an account ?"
          linkText="Sign In"
          url={Routes.login}
        />
      </View>
    </AuthWrapper>
  );
};

export default Registration;

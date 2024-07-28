import Account from "@/components/auth/account";
import AuthGreeting from "@/components/auth/header";
import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Image } from "expo-image";
import * as LocalAuthentication from "expo-local-authentication";
import { Link, useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import * as Yup from "yup";

const Login = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const { push } = useRouter();
  const { updateCurrentUser } = useSession();

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const validationSchema = Yup.object({
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
    .required("Password is required"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    resetForm({});
    push(Routes.Home);
    updateCurrentUser();
  };

  const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert(
        "Biometric record not found",
        "Please check your biometric settings and try again.",
        [{ text: "OK" }]
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      push(Routes.Home);
      updateCurrentUser();
    } else {
      Alert.alert("Authentication failed", "Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <AuthWrapper backgroundColor="#fff">
      <View>
        <AuthGreeting
          heading="Welcome Back"
          body="Hello there, sign in to continue"
          imagePath={require("@/assets/images/Illustration.svg")}
        />

        <Formik
          initialValues={{
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
                <CustomPhoneNumber formik={formik} />
                <View className="mt-4">
                  <CustomInput
                    id="password"
                    placeholder="Password"
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
                <CustomText
                  customClassName="text-primary pt-3 text-right text-xs"
                  fontFamily="PoppinsBold"
                >
                  <Link href={Routes.forgotPassword}>
                    Forgot your password ?
                  </Link>
                </CustomText>
                <View className="pt-12">
                  <CustomButton
                    buttonText="Sign in"
                    isLoading={formik.isSubmitting}
                    disabled={!formik.isValid}
                    onPress={formik.handleSubmit}
                  />
                </View>
              </>
            );
          }}
        </Formik>
        <View className="h-[100px] items-center justify-center pt-10">
          {isBiometricSupported ? (
            <View className="h-[75px]">
              <Image
                className="h-full w-[75px]"
                placeholder="illustration icon"
                contentFit="cover"
                transition={1000}
                source={require("@/assets/images/Fingerprint.svg")}
                onTouchStart={handleBiometricAuth}
              />
            </View>
          ) : (
            <CustomText
              customClassName="pt-10 text-sm"
              fontFamily="PoppinsMedium"
            >
              Biometric authentication is not supported on this device.
            </CustomText>
          )}
        </View>

        <Account
          text="Don't have an account ?"
          linkText="Sign Up"
          url={Routes.register}
        />
      </View>
    </AuthWrapper>
  );
};

export default Login;

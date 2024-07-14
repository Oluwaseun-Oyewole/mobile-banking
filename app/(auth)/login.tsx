import Account from "@/components/auth/account";
import AuthGreeting from "@/components/auth/header";
import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { Image } from "expo-image";
import * as LocalAuthentication from "expo-local-authentication";
import { Link, usePathname, useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import * as Yup from "yup";

const Login = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const validationSchema = Yup.object({
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
      router.push(Routes.Home);
    } else {
      Alert.alert("Authentication failed", "Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <AuthWrapper>
      <>
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
                <View className="mt-5">
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
                <CustomText
                  customClassName="text-primary pt-3 text-right text-xs"
                  fontFamily="PoppinsBold"
                >
                  <Link href={Routes.forgotPassword}>
                    Forgot your password ?
                  </Link>
                </CustomText>
                <View className="pt-10">
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
        {isBiometricSupported ? (
          <View className="items-center justify-center my-8">
            <Image
              className="h-[70px] w-[70px]"
              placeholder="illustration icon"
              contentFit="cover"
              transition={1000}
              source={require("@/assets/images/Fingerprint.svg")}
              onTouchStart={handleBiometricAuth}
            />
          </View>
        ) : (
          <CustomText>
            Biometric authentication is not supported on this device.
          </CustomText>
        )}
        <Account
          text="Don't have an account ?"
          linkText="Sign Up"
          url={Routes.register}
        />
      </>
    </AuthWrapper>
  );
};

export default Login;

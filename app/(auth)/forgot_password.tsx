import AuthWrapper from "@/components/auth/wrappper";
import CustomButton from "@/components/button";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { Formik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const validationSchema = Yup.object({
    phone: Yup.string().required("Phone number is required"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    console.log("values -- ", values);
    setCurrentStep(2);
    resetForm({});
  };

  if (currentStep === 2) {
    return (
      <AuthWrapper>
        <View className="shadow-fuchsia-900 border-gray-500 border-1 justify-center h-[40vh]">
          <CustomText
            customClassName="text-[#979797]"
            fontFamily="PoppinsMedium"
          >
            Change Your Phone Number
          </CustomText>
        </View>
      </AuthWrapper>
    );
  }

  return (
    <AuthWrapper>
      <View className="shadow-fuchsia-900 border-gray-500 border-1 justify-center h-[40vh]">
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

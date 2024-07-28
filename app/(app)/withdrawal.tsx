import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import { allAccounts } from "@/helper/constants";
import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import * as Yup from "yup";

const Withdrawal = () => {
  const { push } = useRouter();
  const validationSchema = Yup.object({
    account: Yup.number().required("Select currency"),
  });

  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    resetForm({});
    push(Routes.withdrawal_success);
  };

  const accountRef = useRef<Modalize>(null);
  const { fromCurrency } = useSession();
  const [accountValue, setAccountValue] = useState("");
  const [checkIndex, setCheckIndex] = useState(0);

  return (
    <MainWrapper backgroundColor="#fff">
      <View>
        <View className="h-[200px]">
          <Image
            className="w-full h-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/withdraw.svg")}
          />
        </View>

        <View className="py-10">
          <Formik
            initialValues={{
              account: "",
              phone: "",
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
                    placeholder="Choose account/card"
                    onChangeText={formik.handleChange("account")}
                    onBlur={formik.handleBlur("account")}
                    value={`VISA ${accountValue}`}
                    name="account"
                    selectable
                    editable={false}
                    openModal={() => accountRef?.current?.open()}
                    currencyType={fromCurrency}
                  />

                  <View className="py-5">
                    <CustomPhoneNumber formik={formik} />
                  </View>

                  <CustomInput
                    placeholder="Amount"
                    onChangeText={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                    value={formik.values.amount}
                    name="amount"
                    editable
                    keyboardType="numeric"
                  />

                  <View className="pt-10">
                    <CustomButton
                      buttonText="verify"
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

        <Modalize
          ref={accountRef}
          withReactModal
          withHandle={false}
          velocity={0.5}
          modalHeight={600}
        >
          <Pressable onPress={() => accountRef?.current?.close()}>
            <View className="justify-end items-end py-4 px-8">
              <Ionicons name="close-circle-outline" size={30} />
            </View>
            <View className="px-8">
              <CustomText
                customClassName="text-[15px]"
                fontFamily="PoppinsMedium"
              >
                Choose account
              </CustomText>
              <View className="py-5">
                {allAccounts?.map((account, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      className="text-neutral2 text-lg flex-row items-center py-3 justify-between"
                      onPress={() => {
                        setCheckIndex(index);
                        setAccountValue(account.account);
                      }}
                    >
                      <View className="flex-row">
                        <CustomText
                          customClassName={classNames("", {
                            "text-primary": checkIndex === account.id,
                          })}
                        >
                          {account.account}
                        </CustomText>
                      </View>

                      {checkIndex === account.id && (
                        <Ionicons name="checkmark" size={20} color="#3629B7" />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Pressable>
        </Modalize>
      </View>
    </MainWrapper>
  );
};

export default Withdrawal;

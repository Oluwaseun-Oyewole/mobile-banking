import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { CurrencyType, fromCurrencies, toCurrencies } from "@/helper/constants";
import { useSession } from "@/hooks/useSession";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import * as Yup from "yup";

const Exchange = () => {
  const [fromAllCurrencies, setAllFromCurrencies] =
    useState<CurrencyType[]>(fromCurrencies);
  const [toAllCurrencies, setToAllCurrencies] =
    useState<CurrencyType[]>(toCurrencies);
  const selectCurrency = (currencyIdex: number) => {
    const currencies = fromAllCurrencies?.map((currency, index) => ({
      ...currency,
      isSelected: index === currencyIdex ? !currency.isSelected : false,
    }));
    return setAllFromCurrencies(currencies);
  };
  const selectToCurrency = (currencyIdex: number) => {
    const currencies = toAllCurrencies?.map((currency, index) => ({
      ...currency,
      isSelected: index === currencyIdex ? !currency.isSelected : false,
    }));
    return setToAllCurrencies(currencies);
  };
  const validationSchema = Yup.object({
    from: Yup.number().required("Select currency"),
    to: Yup.number().required("Select currency"),
  });
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    resetForm({});
  };
  const {
    fromCurrency,
    toCurrency,
    changeFromCurrencyType,
    changeToCurrencyType,
  } = useSession();
  const fromCurrencyRef = useRef<Modalize>(null);
  const toCurrencyRef = useRef<Modalize>(null);

  return (
    <MainWrapper backgroundColor="#fff">
      <View className="pt-5">
        <View className="h-[200px]">
          <Image
            className="w-full h-full"
            placeholder="illustration icon"
            contentFit="cover"
            transition={1000}
            source={require("@/assets/images/exchanges.svg")}
          />
        </View>
        <View className="py-10">
          <Formik
            initialValues={{
              from: "",
              to: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Amount"
                    onChangeText={formik.handleChange("from")}
                    onBlur={formik.handleBlur("from")}
                    value={formik.values.from}
                    name="from"
                    arialLabel="Label for from"
                    arialLabelBy="From"
                    showLabel
                    showExchangeRate
                    openModal={() => fromCurrencyRef?.current?.open()}
                    currencyType={fromCurrency}
                  />

                  <View className="flex-row items-center justify-center pt-5">
                    <Ionicons name="arrow-down" size={30} color="#444444" />
                    <Ionicons name="arrow-up" size={30} color="#FF4267" />
                  </View>

                  <View>
                    <CustomInput
                      placeholder="Amount"
                      onChangeText={formik.handleChange("to")}
                      onBlur={formik.handleBlur("to")}
                      value={formik.values.to}
                      name="to"
                      arialLabel="Label for to"
                      arialLabelBy="To"
                      showLabel
                      showExchangeRate
                      openModal={() => toCurrencyRef?.current?.open()}
                      currencyType={toCurrency}
                    />
                  </View>

                  <View className="pt-10">
                    <CustomButton
                      buttonText="Exchange"
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
      </View>

      <Modalize
        ref={fromCurrencyRef}
        withReactModal
        withHandle={false}
        velocity={0.5}
      >
        <Pressable onPress={() => fromCurrencyRef?.current?.close()}>
          <View className="justify-end items-end py-4 px-8">
            <Ionicons name="close-circle-outline" size={30} />
          </View>
          <View className="px-8">
            <CustomText customClassName="text-[20px]" fontFamily="PoppinsBold">
              Select the currency
            </CustomText>
            <View>
              {fromAllCurrencies?.map((currency, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    className="text-neutral2 text-lg flex-row items-center py-3 justify-between"
                    onPress={() => {
                      changeFromCurrencyType(`${currency.currencyCode!}`);
                      selectCurrency(index);
                    }}
                  >
                    <View className="flex-row">
                      <CustomText
                        customClassName={classNames("", {
                          "text-primary":
                            fromCurrency === currency.currencyCode,
                        })}
                      >
                        {currency?.currencyCode}
                      </CustomText>
                      <CustomText
                        customClassName={classNames("pl-2", {
                          "text-primary":
                            fromCurrency === currency.currencyCode,
                        })}
                      >
                        {`(${currency?.currency})`}
                      </CustomText>
                    </View>

                    {currency.isSelected && (
                      <Ionicons name="checkmark" size={20} color="#3629B7" />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </Pressable>
      </Modalize>

      <Modalize
        ref={toCurrencyRef}
        withReactModal
        withHandle={false}
        velocity={0.5}
      >
        <Pressable onPress={() => toCurrencyRef?.current?.close()}>
          <View className="justify-end items-end py-4 px-8">
            <Ionicons name="close-circle-outline" size={30} />
          </View>
          <View className="px-8">
            <CustomText customClassName="text-[20px]" fontFamily="PoppinsBold">
              Select (to) currency
            </CustomText>
            <View>
              {toAllCurrencies?.map((currency, index) => {
                return (
                  <View
                    key={index}
                    className="text-neutral2 text-lg flex-row items-center"
                  >
                    <TouchableOpacity
                      onPress={() => {
                        changeToCurrencyType(`${currency?.currencyCode}`);
                        selectToCurrency(index);
                      }}
                      className={classNames(
                        "flex-row justify-between items-center py-3 px-3",
                        {
                          "bg-gray-100 w-full": currency.isSelected,
                        }
                      )}
                    >
                      <View className="flex-row">
                        <CustomText
                          customClassName={classNames("", {
                            "text-primary":
                              toCurrency === currency.currencyCode,
                          })}
                        >
                          {currency?.currencyCode}
                        </CustomText>
                        <CustomText
                          customClassName={classNames("pl-2", {
                            "text-primary":
                              toCurrency === currency.currencyCode,
                          })}
                        >
                          {`(${currency?.currency})`}
                        </CustomText>
                      </View>
                      {currency.isSelected && (
                        <Ionicons name="checkmark" size={20} color="#3629B7" />
                      )}
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        </Pressable>
      </Modalize>
    </MainWrapper>
  );
};

export default Exchange;

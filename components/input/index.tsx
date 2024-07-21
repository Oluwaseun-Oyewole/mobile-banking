import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { useRouter } from "expo-router";
import { ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { CustomText } from "../text";
import FormError from "./input.form.error";

type ICustomProps = TextInputProps & {
  name: string;
  isPassword?: boolean;
  arialLabel?: string;
  arialLabelBy?: string;
  customClassName?: string;
  showLabel?: boolean;
  showExchangeRate?: boolean;
};
const CustomInput = ({
  name,
  isPassword,
  arialLabel,
  arialLabelBy,
  customClassName,
  showLabel,
  showExchangeRate,
  ...rest
}: ICustomProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const modalizeRef = useRef<Modalize>(null);
  const router = useRouter();
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View>
      {showLabel && (
        <CustomText
          aria-label={arialLabel}
          nativeID={name}
          customClassName="pb-1 text-neutral2"
          fontFamily="PoppinsMedium"
        >
          {arialLabelBy}
        </CustomText>
      )}
      <View className="border-[1px] border-textColor rounded-2xl h-[58px] justify-center w-full relative flex-row">
        <TextInput
          aria-label={name}
          aria-labelledby={arialLabelBy ?? ""}
          {...rest}
          className={classNames(
            `${showExchangeRate ? "px-5" : "px-0"} focus:border-primary ${
              showExchangeRate ? " w-[75%]" : " w-[90%]"
            }`,
            customClassName
          )}
          style={{ fontFamily: "PoppinsMedium" }}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#CACACA"
          cursorColor="#3629B7"
        />
        {isPassword && (
          <View
            className={`absolute right-5 ${
              showLabel ? "top-[15px]" : "top-[20px]"
            }`}
          >
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <CustomText>
                {!showPassword ? (
                  <Ionicons name="lock-closed" size={20} color="#3629B7" />
                ) : (
                  <Ionicons name="lock-open" size={20} color="#3629B7" />
                )}
              </CustomText>
            </TouchableOpacity>
          </View>
        )}

        {showExchangeRate && (
          <TouchableOpacity
            className="w-[25%] relative pr-2 h-full"
            onPress={() => modalizeRef?.current?.open()}
          >
            <View className="flex-row items-center justify-between">
              <View className="h-[55px] w-[3px] bg-neutral-300" />
              <CustomText customClassName="text-xs">USD</CustomText>

              <View className="flex-col items-center">
                <Ionicons name="chevron-up-outline" size={13} color="#898989" />
                <Ionicons
                  name="chevron-down-outline"
                  size={13}
                  color="#898989"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-1">
        <Modalize ref={modalizeRef}>
          <TouchableOpacity onPress={() => modalizeRef?.current?.close()}>
            <View className="justify-end items-end p-4">
              <CustomText fontFamily="PoppinsBold" customClassName="">
                Close
              </CustomText>
            </View>
          </TouchableOpacity>

          <>
            <CustomText>Testing </CustomText>
          </>
        </Modalize>
      </View>

      <ErrorMessage name={name}>
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </View>
  );
};

export default CustomInput;

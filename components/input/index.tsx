import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { ErrorMessage } from "formik";
import React, { forwardRef, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
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
  openModal?: () => void;
  currencyType?: String;
  editable?: boolean;
  selectable?: boolean;
  showBank?: boolean;
};

const CustomInput = forwardRef(
  (
    {
      name,
      isPassword,
      arialLabel,
      arialLabelBy,
      customClassName,
      showLabel,
      showExchangeRate,
      openModal,
      currencyType,
      selectable,
      editable = true,
      showBank,
      ...rest
    }: ICustomProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
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
        <View
          className={classNames(
            "border-[1px] border-textColor rounded-2xl h-[58px] justify-center w-full relative flex-row focus:border-primary",
            { "bg-gray-100 ": !editable }
          )}
        >
          <TextInput
            aria-label={name}
            aria-labelledby={arialLabelBy ?? ""}
            {...rest}
            className={classNames(
              `${
                showExchangeRate || selectable || showBank ? "px-20" : "px-0"
              } focus:border-primary ${
                showExchangeRate || selectable || showBank
                  ? " w-[75%] text-black"
                  : " w-[90%]"
              }`,
              customClassName
            )}
            style={{ fontFamily: "PoppinsMedium" }}
            secureTextEntry={isPassword && !showPassword}
            placeholderTextColor="#CACACA"
            cursorColor="#000"
            editable={editable}
          />
          <View className="items-center justify-center ">
            <TouchableOpacity onPress={openModal}>
              {!editable && (
                <Ionicons
                  name="chevron-down-outline"
                  color="#cccccc"
                  size={20}
                />
              )}
            </TouchableOpacity>
          </View>
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
              onPress={openModal}
            >
              <View className="flex-row items-center justify-between">
                <View className="h-[55px] w-[3px] bg-neutral-300" />
                <CustomText
                  customClassName="text-xs text-primary"
                  fontFamily="PoppinsMedium"
                >
                  {currencyType}
                </CustomText>

                <View className="flex-col items-center">
                  <Ionicons
                    name="chevron-up-outline"
                    size={13}
                    color="#898989"
                  />
                  <Ionicons
                    name="chevron-down-outline"
                    size={13}
                    color="#898989"
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}

          {selectable && (
            <TouchableOpacity
              className="w-[25%] relative pr-2 h-full items-center justify-center"
              onPress={openModal}
            >
              <View className="items-center justify-center">
                <Ionicons name="chevron-up-outline" size={13} color="#898989" />
                <Ionicons
                  name="chevron-down-outline"
                  size={13}
                  color="#898989"
                />
              </View>
            </TouchableOpacity>
          )}

          {showBank && (
            <TouchableOpacity
              className="w-[25%] relative pr-2 h-full items-center justify-center"
              onPress={openModal}
            >
              <View className="items-center justify-center">
                <Ionicons name="chevron-up-outline" size={13} color="#898989" />
                <Ionicons
                  name="chevron-down-outline"
                  size={13}
                  color="#898989"
                />
              </View>
            </TouchableOpacity>
          )}
        </View>

        <ErrorMessage name={name}>
          {(msg) => <FormError error={msg} />}
        </ErrorMessage>
      </View>
    );
  }
);

export default CustomInput;

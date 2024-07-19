import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { ErrorMessage } from "formik";
import React, { useState } from "react";
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
};
const CustomInput = ({
  name,
  isPassword,
  arialLabel,
  arialLabelBy,
  customClassName,
  ...rest
}: ICustomProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="relative">
      {/* <CustomText
        aria-label={arialLabel}
        nativeID={name}
        customClassName="pb-[0.5px]"
      >
        {arialLabelBy}
      </CustomText> */}
      <TextInput
        aria-label={name}
        aria-labelledby={arialLabelBy ?? ""}
        {...rest}
        className={classNames(
          "border-[1px] border-textColor rounded-2xl px-5 h-[54px] focus:border-primary",
          customClassName
        )}
        style={{ fontFamily: "PoppinsMedium" }}
        secureTextEntry={isPassword && !showPassword}
        placeholderTextColor="#CACACA"
        cursorColor="#3629B7"
      />
      {isPassword && (
        <View className="absolute right-5 top-[18px]">
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

      <ErrorMessage name={name}>
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </View>
  );
};

export default CustomInput;

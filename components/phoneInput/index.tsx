import FormError from "@/components/input/input.form.error";
import { CustomText } from "@/components/text";
import { ErrorMessage, FormikProps } from "formik";
import parsePhoneNumberFromString from "libphonenumber-js";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import PhoneInput from "react-phone-number-input/react-native-input";

const CustomPhoneNumber = ({ formik }: { formik: FormikProps<any> }) => {
  const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode | any>(
    "NG"
  );
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [callingCodes, setCallingCodes] = useState<string | string[]>("234");
  const phoneInputRef = useRef<HTMLInputElement>(null);

  function validatePhoneNumber(phoneNumber: string, countryCode: any) {
    try {
      const phoneNumberObj = parsePhoneNumberFromString(
        phoneNumber,
        countryCode as any
      );
      if (phoneNumberObj && phoneNumberObj.isValid()) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  useEffect(() => {
    if (phoneInputRef?.current) {
      phoneInputRef?.current?.focus();
    }
  });

  return (
    <>
      <View className="flex-row border-[1px] border-textColor rounded-2xl px-5 h-[54px] focus:border-primary items-center overflow-x-hidden">
        <CountryPicker
          countryCode={phoneCountryCode}
          visible={showPhoneCountryPicker}
          onClose={() => setShowPhoneCountryPicker(false)}
          withFilter
          withCallingCode
          onSelect={(country: Country) => {
            setPhoneCountryCode(country.cca2);
            setCallingCodes(country?.callingCode as string[]);
            formik.setFieldValue("phone", "");
          }}
          containerButtonStyle={{ width: 30 }}
        />
        <View className="flex-row items-center mt-1">
          <CustomText
            customClassName="pr-3 text-textColor"
            fontFamily="PoppinsMedium"
          >{`(+${callingCodes})`}</CustomText>
          <PhoneInput
            // ref={phoneInputRef}
            defaultCountry={phoneCountryCode}
            value={formik.values.phone}
            onChangePhoneNumber={(value: string) =>
              formik.setFieldValue("phone", value)
            }
            name="phone"
            onChange={(value) => formik.setFieldValue("phone", value)}
            style={{
              fontFamily: "PoppinsMedium",
              width: "75%",
              overflow: "hidden",
            }}
            placeholder="0903 847 1984"
            onBlur={formik.handleBlur("phone")}
          />
        </View>
      </View>

      <>
        {formik.values.phone && (
          <>
            {!validatePhoneNumber(formik.values.phone, phoneCountryCode) && (
              <FormError error="Invalid Phone Input" />
            )}
          </>
        )}
      </>

      <ErrorMessage name="phone">
        {(msg) => <FormError error={msg} />}
      </ErrorMessage>
    </>
  );
};

export default CustomPhoneNumber;

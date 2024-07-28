import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import CustomPhoneNumber from "@/components/phoneInput";
import { CustomText } from "@/components/text";
import {
  allAccounts,
  beneficiaryArray,
  transferArray,
} from "@/helper/constants";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import * as Yup from "yup";

const MobilePrepaid = () => {
  const [isChecked, setChecked] = useState(false);
  const transferModalRef = useRef<Modalize>(null);
  const beneficiaryRef = useRef<Modalize>(null);
  const { push } = useRouter();
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.mobile_confirm);
    resetForm({});
    setChecked(false);
  };
  const [transfers, setTransfers] = useState(transferArray);
  const [beneficiaries, setBeneficiaries] = useState(beneficiaryArray);
  const [tabIndex, setTabIndex] = useState(0);
  const selectTransfer = (transferIndex: number) => {
    const updateTransfer = transfers?.map((transfer, index) => ({
      ...transfer,
      isSelected: index === transferIndex ? !transfer.isSelected : false,
    }));
    setTransfers(updateTransfer);
  };

  const validationSchema = Yup.object({
    amount: Yup.number().required("Amount is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const allAccountRef = useRef<Modalize>(null);
  const [accountValue, setAccountValue] = useState("0025563565376");
  const [checkIndex, setCheckIndex] = useState(0);

  return (
    <MainWrapper backgroundColor="#fff">
      <Pressable onPress={() => transferModalRef.current?.open()}>
        <Formik
          initialValues={{
            accountNumber: "",
          }}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <>
                <CustomInput
                  placeholder={accountValue}
                  onChangeText={formik.handleChange("accountNumber")}
                  onBlur={formik.handleBlur("accountNumber")}
                  value={`VISA ${accountValue}`}
                  name="accountNumber"
                  editable={false}
                  selectable
                  openModal={() => allAccountRef?.current?.open()}
                />
              </>
            );
          }}
        </Formik>
      </Pressable>

      <View className="pt-14 pb-10">
        <View className="flex-row items-center justify-between pl-2 pb-2">
          <CustomText>Directory</CustomText>
          <TouchableOpacity onPress={() => beneficiaryRef.current?.open()}>
            <CustomText customClassName="text-primary">
              Find beneficiary
            </CustomText>
          </TouchableOpacity>
        </View>

        <FlatList
          data={beneficiaries}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{
            paddingLeft: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index: fIndex }) => {
            return (
              <View key={fIndex}>
                <View
                  className="w-[120px] h-[150px] mx-[6px]"
                  style={{
                    borderRadius: 15,
                    borderCurve: "continuous",
                    borderWidth: 0.5,
                    borderColor: "#b9b9b9",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View className="h-[50px]">
                    <Image
                      className="w-[50px] h-full"
                      placeholder="illustration icon"
                      contentFit="cover"
                      transition={1000}
                      source={item.imagePath}
                    />
                  </View>

                  <CustomText customClassName="text-black mt-2">
                    {item.name}
                  </CustomText>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View>
        <Formik
          initialValues={{
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
                <View>
                  <CustomText customClassName="pb-1 text-gray-500">
                    Phone number
                  </CustomText>
                  <CustomPhoneNumber formik={formik} />
                </View>

                <View className="mt-5">
                  <CustomInput
                    placeholder="Amount"
                    onChangeText={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                    value={formik.values.amount}
                    name="amount"
                    editable
                    keyboardType="numeric"
                    arialLabel="Amount"
                    arialLabelBy="Amount"
                    showLabel
                  />
                </View>

                <View className="pt-16">
                  <CustomButton
                    buttonText="Confirm"
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
        ref={beneficiaryRef}
        modalStyle={{ paddingHorizontal: 20 }}
        modalHeight={500}
        handlePosition="inside"
        withReactModal
      >
        <TouchableOpacity onPress={() => beneficiaryRef?.current?.close()}>
          <View className="justify-end items-end p-4">
            <Ionicons name="close-circle" size={27} />
          </View>

          <View className="pt-2">
            <Formik
              initialValues={{
                beneficiary: "",
              }}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <>
                    <CustomInput
                      placeholder="Search beneficiary"
                      onChangeText={formik.handleChange("beneficiary")}
                      onBlur={formik.handleBlur("beneficiary")}
                      value={formik.values.beneficiary}
                      name="beneficiary"
                    />
                  </>
                );
              }}
            </Formik>
          </View>
        </TouchableOpacity>
      </Modalize>

      <Modalize
        ref={allAccountRef}
        withReactModal
        withHandle={false}
        velocity={0.5}
        modalHeight={600}
      >
        <Pressable onPress={() => allAccountRef?.current?.close()}>
          <View className="justify-end items-end py-4 px-8">
            <Ionicons name="close-circle-outline" size={30} />
          </View>
          <View className="px-8">
            <CustomText
              customClassName="text-[15px]"
              fontFamily="PoppinsMedium"
            >
              Select account number
            </CustomText>
            <View className="pb-5 pt-2">
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
    </MainWrapper>
  );
};

export default MobilePrepaid;

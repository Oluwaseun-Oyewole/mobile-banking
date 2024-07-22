import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { beneficiaryArray, transferArray } from "@/helper/constants";
import { Routes } from "@/routes/routes";
import classNames from "classnames";
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import * as Yup from "yup";

const Transfer = () => {
  const [isChecked, setChecked] = useState(false);
  const transferModalRef = useRef<Modalize>(null);
  const beneficiaryRef = useRef<Modalize>(null);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    amount: Yup.number().required("Amount is required"),
    cardNumber: Yup.number().required("Card number is required"),
    content: Yup.string().required("Content is required"),
  });
  const { push } = useRouter();
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.confirm);
    resetForm({});
  };
  const [transfers, setTransfers] = useState(transferArray);
  const [beneficiaries, setBeneficiaries] = useState(beneficiaryArray);

  const selectTransfer = (transferIndex: number) => {
    const updateTransfer = transfers?.map((transfer, index) => ({
      ...transfer,
      isSelected: index === transferIndex ? !transfer.isSelected : false,
    }));
    setTransfers(updateTransfer);
  };

  const selectBeneficiary = (transferIndex: number) => {
    const updateBeneficiary = beneficiaries?.map((beneficiary, index) => ({
      ...beneficiary,
      isSelected: index === transferIndex ? !beneficiary.isSelected : false,
    }));
    setBeneficiaries(updateBeneficiary);
  };

  return (
    <MainWrapper backgroundColor="#fff">
      <View>
        <TouchableOpacity
          className="py-5"
          onPress={() => transferModalRef.current?.open()}
        >
          <Formik
            initialValues={{
              cardType: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Choose account / card"
                    onChangeText={formik.handleChange("cardType")}
                    onBlur={formik.handleBlur("cardType")}
                    value={formik.values.cardType}
                    name="cardType"
                    editable={false}
                    selectable
                  />
                </>
              );
            }}
          </Formik>
        </TouchableOpacity>
      </View>

      <View className="pt-5">
        <CustomText
          customClassName="pl-2 text-neutral3"
          fontFamily="PoppinsMedium"
        >
          Choose transaction
        </CustomText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          <View className="flex-row gap-2 mt-[0.5px]">
            {transfers?.map((transfer, index) => {
              return (
                <Pressable
                  key={index}
                  className={classNames(
                    "bg-neutral2 w-[24%] p-3 h-[140px] rounded-lg justify-center opacity-70",
                    {
                      "bg-primary opacity-100": transfer.isSelected,
                    }
                  )}
                  onPress={() => selectTransfer(index)}
                >
                  <View className="h-[35px]">
                    <Image
                      className="w-[35px] h-full"
                      placeholder="illustration icon"
                      contentFit="cover"
                      transition={1000}
                      source={transfer.imagePath}
                    />
                  </View>

                  <CustomText customClassName="text-white mt-2 w-[65%]">
                    {transfer.transferType}
                  </CustomText>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View className="pt-14 pb-10">
        <View className="flex-row items-center justify-between pl-2">
          <CustomText
            customClassName="text-neutral3"
            fontFamily="PoppinsMedium"
          >
            Choose beneficiary
          </CustomText>
          <TouchableOpacity onPress={() => beneficiaryRef.current?.open()}>
            <CustomText
              customClassName="text-primary"
              fontFamily="PoppinsMedium"
            >
              Find beneficiary
            </CustomText>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0, flex: 1 }}
        >
          {/* <View className="flex-row gap-2 items-center"> */}
          {beneficiaries?.map((transfer, index) => {
            return (
              <Pressable
                key={index}
                className={classNames(
                  "bg-gray-100 w-[30%] p-3 h-[150px] rounded-lg justify-center items-center mx-1",
                  {
                    "bg-gray-100 opacity-100": transfer.isSelected,
                  }
                )}
                onPress={() => selectTransfer(index)}
              >
                <View className="h-[50px]">
                  <Image
                    className="w-[50px] h-full"
                    placeholder="illustration icon"
                    contentFit="cover"
                    transition={1000}
                    source={transfer.imagePath}
                  />
                </View>

                <CustomText customClassName="text-black mt-2">
                  {transfer.name}
                </CustomText>
              </Pressable>
            );
          })}
          {/* </View> */}
        </ScrollView>
      </View>

      <View className="py-5">
        <Formik
          initialValues={{
            name: "",
            amount: "",
            cardNumber: "",
            content: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => {
            return (
              <>
                <CustomInput
                  placeholder="Name"
                  onChangeText={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name}
                  name="name"
                />
                <View className="pt-3">
                  <CustomInput
                    placeholder="Card number"
                    onChangeText={formik.handleChange("cardNumber")}
                    onBlur={formik.handleBlur("cardNumber")}
                    value={formik.values.cardNumber}
                    name="cardNumber"
                    keyboardType="numeric"
                  />
                </View>
                <View className="py-3">
                  <CustomInput
                    placeholder="Amount"
                    onChangeText={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                    value={formik.values.amount}
                    name="amount"
                    keyboardType="number-pad"
                  />
                </View>
                <CustomInput
                  placeholder="Content"
                  onChangeText={formik.handleChange("content")}
                  onBlur={formik.handleBlur("content")}
                  value={formik.values.content}
                  name="content"
                />

                <View className="py-7 flex-row items-start gap-2">
                  <View>
                    <Checkbox
                      className="font-light border-red-500 border-2"
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#3629B7" : "#CACACA"}
                    />
                  </View>

                  <View>
                    <CustomText customClassName="text-sm">
                      Save to beneficiary
                    </CustomText>
                  </View>
                </View>

                <View>
                  <CustomButton
                    buttonText="Confirm"
                    isLoading={formik.isSubmitting}
                    disabled={!formik.isValid || !isChecked}
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
            <CustomText fontFamily="PoppinsBold" customClassName="">
              Close
            </CustomText>
          </View>

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
        </TouchableOpacity>
      </Modalize>

      <Modalize
        ref={transferModalRef}
        modalStyle={{ height: 10, paddingHorizontal: 20 }}
        overlayStyle={{ height: "auto" }}
        modalHeight={400}
        handlePosition="inside"
        withReactModal
        // withHandle={false}
      >
        <TouchableOpacity onPress={() => transferModalRef?.current?.close()}>
          <View className="justify-end items-end p-4">
            <CustomText fontFamily="PoppinsBold" customClassName="">
              Close
            </CustomText>
          </View>
        </TouchableOpacity>
      </Modalize>
    </MainWrapper>
  );
};

export default Transfer;

import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import TransferForm from "@/components/transfer";
import { beneficiaryArray, transferArray } from "@/helper/constants";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import classNames from "classnames";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

const Transfer = () => {
  const [isChecked, setChecked] = useState(false);
  const transferModalRef = useRef<Modalize>(null);
  const beneficiaryRef = useRef<Modalize>(null);
  const { push } = useRouter();
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.confirm);
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

  const [cardType, ,] = useState("VISA 0025563565376");

  return (
    <MainWrapper backgroundColor="#fff">
      <Pressable onPress={() => transferModalRef.current?.open()}>
        <Formik
          initialValues={{
            cardType: "",
          }}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <>
                <CustomInput
                  placeholder={cardType}
                  onChangeText={formik.handleChange("cardType")}
                  onBlur={formik.handleBlur("cardType")}
                  value={cardType}
                  name="cardType"
                  editable={false}
                  selectable
                />
              </>
            );
          }}
        </Formik>
      </Pressable>

      <View className="pt-5">
        <CustomText
          customClassName="pl-2 text-neutral3"
          fontFamily="PoppinsMedium"
        >
          Choose transaction
        </CustomText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-x-5 mt-[5px]">
            {transfers?.map((transfer, index) => {
              return (
                <Pressable
                  key={index}
                  className={classNames(
                    "bg-orange-700 p-4 h-[140px] rounded-lg justify-center opacity-70",
                    {
                      "bg-primary opacity-100": transfer.isSelected,
                    }
                  )}
                  onPress={() => {
                    selectTransfer(index);
                    setTabIndex(index);
                  }}
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
        <View className="flex-row items-center justify-between pl-2 pb-3">
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

      <TransferForm tabIndex={tabIndex} />

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
    </MainWrapper>
  );
};

export default Transfer;

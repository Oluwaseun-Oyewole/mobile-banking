import CustomInput from "@/components/input";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import TransferForm from "@/components/transfer";
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
import {
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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

      <View className="pt-8">
        <CustomText customClassName="pb-2">Choose transaction</CustomText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-x-5 mt-[5px]">
            {transfers?.map((transfer, index) => {
              return (
                <Pressable
                  key={index}
                  className={classNames(
                    "p-4 h-[140px] rounded-lg justify-center opacity-70 bg-gray-400",
                    {
                      "bg-primary opacity-100": transfer.isSelected,
                    },
                    { " border-textColor border-[1px]": !transfer.isSelected }
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

                  <CustomText
                    customClassName={classNames("text-white mt-2 w-[65%]", {
                      "text-white": !transfer.isSelected,
                    })}
                  >
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
          <CustomText>Choose beneficiary</CustomText>
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

export default Transfer;

import CustomButton from "@/components/button";
import CustomInput from "@/components/input";
import { CustomText } from "@/components/text";
import { banksArray, branchArray } from "@/helper/constants";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import * as Yup from "yup";

const TransferForm = ({ tabIndex }: { tabIndex: number }) => {
  const [isChecked, setChecked] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    cardNumber: Yup.number().required("Card number is required"),
    amount: Yup.number().required("Amount is required"),
    note: Yup.string().required("Note is required"),
  });
  const { push } = useRouter();
  const onSubmit = async (values: Record<string, any>, { resetForm }: any) => {
    push(Routes.confirm);
    resetForm({});
    setChecked(false);
  };
  const fromCurrencyRef = useRef<Modalize>(null);
  const toCurrencyRef = useRef<Modalize>(null);
  const [allBanks, setAllBanks] = useState(banksArray);
  const [allBranches, setAllBranches] = useState(branchArray);
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const selectBank = (transferIndex: number) => {
    const updateBanks = allBanks?.map((bank, index) => ({
      ...bank,
      isSelected: index === transferIndex ? !bank.isSelected : false,
    }));
    setAllBanks(updateBanks);
  };
  const selectBranch = (transferIndex: number) => {
    const updateBanks = allBranches?.map((bank, index) => ({
      ...bank,
      isSelected: index === transferIndex ? !bank.isSelected : false,
    }));
    setAllBranches(updateBanks);
  };

  if (tabIndex === 1) {
    return (
      <>
        <View className="py-10">
          <Formik
            initialValues={{
              selectedBank,
              selectedBranch,
              name: "",
              cardNumber: "",
              amount: "",
              note: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => {
              return (
                <>
                  <CustomInput
                    placeholder="Choose bank"
                    onChangeText={formik.handleChange("selectedBank")}
                    onBlur={formik.handleBlur("selectedBank")}
                    value={selectedBank}
                    name="selectedBank"
                    arialLabel="Label for bank"
                    arialLabelBy="choose bank"
                    showLabel
                    showBank
                    openModal={() => fromCurrencyRef?.current?.open()}
                    editable={false}
                  />

                  <View className="py-7">
                    <CustomInput
                      placeholder="Choose branch"
                      onChangeText={formik.handleChange("selectedBranch")}
                      onBlur={formik.handleBlur("selectedBranch")}
                      value={selectedBranch}
                      name="selectedBranch"
                      arialLabel="Label for choose branch"
                      arialLabelBy="Choose branch"
                      showLabel
                      editable={false}
                      showBank
                      openModal={() => toCurrencyRef?.current?.open()}
                    />
                  </View>

                  <CustomInput
                    placeholder="Name"
                    onChangeText={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                    value={formik.values.name}
                    name="name"
                    arialLabel="Label for choose name"
                    arialLabelBy="Name"
                    showLabel
                  />

                  <View className="py-7">
                    <CustomInput
                      placeholder="Card number"
                      onChangeText={formik.handleChange("cardNumber")}
                      onBlur={formik.handleBlur("cardNumber")}
                      value={formik.values.cardNumber}
                      name="cardNumber"
                      arialLabel="Label for choose card number"
                      arialLabelBy="Card number"
                      showLabel
                      keyboardType="numeric"
                    />
                  </View>

                  <CustomInput
                    placeholder="Card number"
                    onChangeText={formik.handleChange("amount")}
                    onBlur={formik.handleBlur("amount")}
                    value={formik.values.amount}
                    name="amount"
                    arialLabel="Label for choose amount"
                    arialLabelBy="Amount"
                    showLabel
                    keyboardType="numeric"
                  />

                  <View className="py-7">
                    <CustomInput
                      placeholder="From Jimmy"
                      onChangeText={formik.handleChange("note")}
                      onBlur={formik.handleBlur("note")}
                      value={formik.values.note}
                      name="note"
                      arialLabel="Label for choose note"
                      arialLabelBy="Note"
                      showLabel
                    />
                  </View>

                  <View className=" flex-row items-start gap-2">
                    <View>
                      <Checkbox
                        className="font-light border-red-500 border-2"
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#3629B7" : "#CACACA"}
                      />
                    </View>
                    <View>
                      <CustomText
                        customClassName="text-sm text-primary"
                        fontFamily="PoppinsMedium"
                      >
                        Save to beneficiary directory
                      </CustomText>
                    </View>
                  </View>

                  <View className="pt-5">
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
          ref={fromCurrencyRef}
          withReactModal
          withHandle={false}
          modalHeight={600}
        >
          <Pressable onPress={() => fromCurrencyRef?.current?.close()}>
            <View className="justify-end items-end py-4 px-8">
              <Ionicons name="close-circle-outline" size={30} />
            </View>
            <View className="px-8">
              <CustomText customClassName="pb-3" fontFamily="PoppinsBold">
                Choose beneficiary bank
              </CustomText>
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
                          placeholder="Search"
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
              <View className="py-3">
                {allBanks?.map((bank, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      className="text-neutral2 text-lg flex-row items-center py-3 justify-between"
                      onPress={() => {
                        selectBank(index);
                        setSelectedBank(bank?.name);
                      }}
                    >
                      <CustomText>{bank?.name}</CustomText>

                      {bank.isSelected && (
                        <Ionicons
                          name="checkmark-outline"
                          size={20}
                          color="#3629B7"
                        />
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
          modalHeight={600}
        >
          <Pressable onPress={() => toCurrencyRef?.current?.close()}>
            <View className="justify-end items-end py-4 px-8">
              <Ionicons name="close-circle-outline" size={30} />
            </View>

            <View className="px-8">
              <CustomText customClassName="pb-3" fontFamily="PoppinsBold">
                Choose beneficiary bank
              </CustomText>
              <View>
                {allBranches?.map((bank, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      className="text-neutral2 text-lg flex-row items-center py-3 justify-between"
                      onPress={() => {
                        selectBranch(index);
                        setSelectedBranch(bank?.name);
                      }}
                    >
                      <CustomText>{bank?.name}</CustomText>

                      {bank.isSelected && (
                        <Ionicons
                          name="checkmark-outline"
                          size={20}
                          color="#3629B7"
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Pressable>
        </Modalize>
      </>
    );
  }
  return (
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
              <View className="py-6">
                <CustomInput
                  placeholder="Card number"
                  onChangeText={formik.handleChange("cardNumber")}
                  onBlur={formik.handleBlur("cardNumber")}
                  value={formik.values.cardNumber}
                  name="cardNumber"
                  keyboardType="numeric"
                />
              </View>
              <View>
                <CustomInput
                  placeholder="Amount"
                  onChangeText={formik.handleChange("amount")}
                  onBlur={formik.handleBlur("amount")}
                  value={formik.values.amount}
                  name="amount"
                  keyboardType="number-pad"
                />
              </View>
              <View className="py-6">
                <CustomInput
                  placeholder="Content"
                  onChangeText={formik.handleChange("content")}
                  onBlur={formik.handleBlur("content")}
                  value={formik.values.content}
                  name="content"
                />
              </View>

              <View className="flex-row items-start gap-2">
                <View>
                  <Checkbox
                    className="font-light border-red-500 border-2"
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? "#3629B7" : "#CACACA"}
                  />
                </View>

                <View>
                  <CustomText
                    customClassName="text-sm text-primary"
                    fontFamily="PoppinsMedium"
                  >
                    Save to beneficiary directory
                  </CustomText>
                </View>
              </View>

              <View className="pt-6">
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
  );
};

export default TransferForm;

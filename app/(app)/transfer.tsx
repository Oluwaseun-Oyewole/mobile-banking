import CustomButton from "@/components/button";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import React, { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

const Transfer = () => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    try {
      modalizeRef.current?.open();
    } catch (error) {
      return;
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <MainWrapper>
      <CustomButton onPress={onOpen} buttonText="Open Button" />

      {/* <TouchableOpacity
        className="absolute top-0 left-0 right-0 bottom-0 items-center inset-0 z-20 h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: openModal ? 1 : 0,
        }}
      >
        <View className="mt-40 w-[80%] h-[250px] bg-white rounded-lg">
          <CustomText onPress={() => setOpenModal(false)}>close</CustomText>
        </View>
      </TouchableOpacity> */}

      <Modalize
        ref={modalizeRef}
        modalStyle={{ height: 10, paddingHorizontal: 20 }}
        overlayStyle={{ height: "auto" }}
        // modalHeight={500}
        handlePosition="inside"
        withReactModal
        // withHandle={false}
      >
        <TouchableOpacity onPress={() => modalizeRef?.current?.close()}>
          <View className="justify-end items-end p-4">
            <CustomText fontFamily="PoppinsBold" customClassName="">
              Close
            </CustomText>
          </View>
          <CustomText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aut!
          </CustomText>
          <CustomText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aut!
          </CustomText>
          <CustomText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aut!
          </CustomText>
          <CustomText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aut!
          </CustomText>
        </TouchableOpacity>
      </Modalize>
    </MainWrapper>
  );
};

export default Transfer;

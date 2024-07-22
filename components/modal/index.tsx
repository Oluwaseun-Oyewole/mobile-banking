import React, { PropsWithChildren, forwardRef } from "react";
import { View } from "react-native";
import { CustomText } from "../text";

type ModalProps = PropsWithChildren & {};
const Modal = forwardRef<HTMLInputElement, ModalProps>(({ children }, ref) => {
  return (
    <View className="h-full">
      <View className="bg-gray-50 absolute top-0 left-0  h-full w-full items-center justify-center">
        <View className="bg-white w-[80%] h-[300px] rounded-lg">
          <CustomText>Modal Components Tops</CustomText>
        </View>
      </View>
    </View>
  );
});

export default Modal;

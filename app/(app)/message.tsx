import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

const Messages = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <MainWrapper>
      <View>
        <View className="bg-red-500 items-start justify-center">
          <CustomText>Messages</CustomText>
        </View>
        <>
          <TouchableOpacity onPress={onOpen}>
            <CustomText>Open the modal</CustomText>
          </TouchableOpacity>
          <Modalize ref={modalizeRef}>
            <CustomText onPress={() => modalizeRef?.current?.close()}>
              ...your content
            </CustomText>
          </Modalize>
        </>
      </View>
    </MainWrapper>
  );
};

export default Messages;

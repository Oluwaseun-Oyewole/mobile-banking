import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { languagesArray } from "@/helper/constants";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const Languages = () => {
  const [selected, setSelected] = useState(false);

  const onPress = () => {
    setSelected(!selected);
  };
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="pt-3">
        {languagesArray?.map((language, index) => {
          return (
            <View key={index} className="pb-4">
              <View className="flex-row items-center justify-between border-b-2 border-gray-100 pb-3">
                <TouchableOpacity onPress={onPress}>
                  <View className="flex-row items-center">
                    <Image
                      className="w-[40px] h-[30px]"
                      placeholder="illustration icon"
                      contentFit="cover"
                      transition={1000}
                      source={language.imageURI}
                    />
                    <CustomText
                      customClassName="pl-4"
                      fontFamily="PoppinsMedium"
                    >
                      {language?.countryName}
                    </CustomText>
                  </View>
                </TouchableOpacity>

                {selected && (
                  <Ionicons
                    name="checkmark"
                    size={20}
                    className="font-black"
                    color="#3629B7"
                  />
                )}
              </View>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default Languages;

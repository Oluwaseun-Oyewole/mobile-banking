import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { LanguageType, languagesArray } from "@/helper/constants";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const Languages = () => {
  const [languages, setLanguages] = useState<LanguageType[]>(languagesArray);
  const selectedLanguage = (languageIndex: number) => {
    const selectedLanguage = languages?.map((language, index) => ({
      ...language,
      isSelected: index === languageIndex ? !language.isSelected : false,
    }));
    setLanguages(selectedLanguage);
  };
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="pt-3">
        {languages?.map((language, index) => {
          return (
            <View key={index} className="pb-4">
              <View className="flex-row items-center justify-between border-b-2 border-gray-100 pb-3">
                <TouchableOpacity onPress={() => selectedLanguage(index)}>
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

                {language?.isSelected && (
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

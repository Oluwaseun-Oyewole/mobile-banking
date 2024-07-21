import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { searchArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Search = () => {
  const { push } = useRouter();
  return (
    <MainWrapper backgroundColor="#fff">
      <View className="w-full flex-wrap">
        {searchArrays?.map((cards, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => push(cards?.link)}
              className="py-2"
            >
              <View className="w-full flex-row justify-between px-4 items-center h-[120px] rounded-2xl bg-primary4">
                <View>
                  <CustomText
                    customClassName="text-lg"
                    fontFamily="PoppinsBold"
                  >
                    {cards?.title}
                  </CustomText>
                  <CustomText
                    customClassName="text-xs pt-[5px] text-neutral2"
                    fontFamily="PoppinsMedium"
                  >
                    {cards?.description}
                  </CustomText>
                </View>

                <View className="h-[75px]">
                  <Image
                    className="w-[75px] h-full"
                    placeholder="illustration icon"
                    contentFit="cover"
                    transition={1000}
                    source={cards?.imagePath}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default Search;

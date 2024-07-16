import MainWrapper from "@/components/main/wrapper";
import CustomPressable from "@/components/pressible";
import { CustomText } from "@/components/text";
import { searchArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

const Search = () => {
  const { push } = useRouter();
  return (
    <MainWrapper>
      <View className="w-full flex-wrap my-4">
        {searchArrays?.map((cards, index) => {
          return (
            <CustomPressable
              key={index}
              onPress={() => push(cards?.link)}
              customClassName="bg-transparent py-0"
            >
              <View className="mt-5 w-full flex-row justify-between px-4 items-center h-[120px] rounded-2xl bg-white">
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
            </CustomPressable>
          );
        })}
      </View>
    </MainWrapper>
  );
};

export default Search;

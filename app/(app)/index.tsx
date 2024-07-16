import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { HomeCardArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <MainWrapper>
      <View className="w-full flex-row flex-wrap py-8 gap-2">
        {HomeCardArrays?.map((cards, index) => {
          return (
            <View
              key={index}
              className="items-center justify-center flex-3 w-[30%] py-4 rounded-xl bg-white"
            >
              <View className="h-[30px]">
                <Image
                  className="w-[30px] h-full"
                  placeholder="illustration icon"
                  contentFit="cover"
                  transition={1000}
                  source={cards?.imagePath}
                />
              </View>
              <CustomText
                customClassName="text-[10px] px-3 pt-3 text-center"
                fontFamily="PoppinsMedium"
              >
                {cards?.title}
              </CustomText>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
}

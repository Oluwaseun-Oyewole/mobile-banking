import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { HomeCardArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <MainWrapper>
      <View className="w-full flex-row flex-wrap gap-2">
        {HomeCardArrays?.map((cards, index) => {
          return (
            <View
              key={index}
              className="shadow-2xl mt-4 items-center justify-center flex-3 w-[30%] text-center py-5 rounded-2xl bg-whites"
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
                customClassName="text-[10px] px-3 pt-1 text-center text-[#979797]"
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

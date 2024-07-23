import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { HomeCardArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { push } = useRouter();
  return (
    <MainWrapper>
      <View className="">
        <ImageBackground
          source={require("@/assets/images/visa.png")}
          style={{ height: 270, borderRadius: 300, flex: 1 }}
          className="flex-1 items-center justify"
          resizeMethod="resize"
        >
          <View>
            <CustomText>Seun Samuel</CustomText>
          </View>
        </ImageBackground>

        {/* <ImageBackground
          source={require("@/assets/images/orange_visa.png")}
          style={{ height: 270, borderRadius: 300 }}
        >
          <View></View>
        </ImageBackground> */}

        <View className="w-full flex-row flex-wrap justify-between">
          {HomeCardArrays?.map((cards, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="items-center justify-center w-[31%] py-4 rounded-xl bg-white mt-3"
                onPress={() => push(cards?.link!)}
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
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </MainWrapper>
  );
}

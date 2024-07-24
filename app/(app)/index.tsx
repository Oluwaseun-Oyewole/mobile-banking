import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { HomeCardArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const images = [
  { imagePath: require("@/assets/images/visa.png") },
  // { imagePath: require("@/assets/images/orange_visa.png") },
];

const HomeScreen = () => {
  const { push } = useRouter();

  return (
    <MainWrapper>
      <View className="">
        <View className="h-[270px]">
          {images?.map((image, index) => {
            return (
              <ImageBackground
                key={index}
                source={image.imagePath}
                className="flex-1 items-center justify-center"
              >
                <View className=" w-full p-6">
                  <View className="">
                    <CustomText
                      fontFamily="PoppinsBold"
                      customClassName="text-white text-lg"
                    >
                      Seun Samuel
                    </CustomText>
                    <CustomText
                      fontFamily="PoppinsMedium"
                      customClassName="text-white pt-8"
                    >
                      Amazon Platinum
                    </CustomText>
                    <CustomText
                      fontFamily="PoppinsMedium"
                      customClassName="text-white pt-2"
                    >
                      2020 3456 **** **** 8783
                    </CustomText>
                    <CustomText
                      fontFamily="PoppinsBold"
                      customClassName="text-white pt-4 text-lg"
                    >
                      {formatCurrency(78787)}
                    </CustomText>
                  </View>
                </View>
              </ImageBackground>
            );
          })}
        </View>

        <View className="w-full flex-row flex-wrap justify-between">
          {HomeCardArrays?.map((cards, index) => {
            return (
              <TouchableOpacity
                key={index}
                className="items-center justify-center w-[31%] py-4 rounded-xl bg-white mb-4"
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
};

export default HomeScreen;

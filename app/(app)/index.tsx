import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { HomeCardArrays, cardDetails } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { push } = useRouter();
  return (
    <MainWrapper>
      <View className="">
        <View className="my-6 h-[220px] rounded-2xl bg-[#0890FE] flex-row flex-1 relative">
          <View className="h-full bg-[#1E1671] w-[75%] rounded-tl-[700px] rounded-bl-[700px] rounded-tr-full rounded-br-3xl p-5">
            <CustomText
              fontFamily="PoppinsMedium"
              customClassName="text-white text-lg pt-3 pb-8"
            >
              {cardDetails?.username}
            </CustomText>

            <CustomText customClassName="text-white">
              {cardDetails?.cardName}
            </CustomText>

            <CustomText customClassName="text-white py-4">
              {cardDetails?.cardNumber}
            </CustomText>
            <View className="flex-row items-center justify-between">
              <CustomText customClassName="text-white" fontFamily="PoppinsBold">
                {formatCurrency(cardDetails?.availableBalance)}
              </CustomText>
            </View>
          </View>
          <View className="items-end justify-end p-6 absolute bottom-0 left-[250px]">
            <CustomText
              customClassName="text-white text-2xl"
              fontFamily="PoppinsBold"
            >
              {cardDetails?.cardType}
            </CustomText>
          </View>
          <View className="h-[150px] bg-[#4EB4FF] w-[25%] rounded-tl-full rounded-bl-full"></View>
        </View>

        <View className="h-[220px] rounded-2xl bg-[#0890FE] flex-row flex-1 relative">
          <View className="h-full bg-[#1E1671] w-[75%] rounded-tl-[700px] rounded-bl-[700px] rounded-tr-full rounded-br-3xl p-5">
            <CustomText
              fontFamily="PoppinsMedium"
              customClassName="text-white text-lg pt-3 pb-8"
            >
              {cardDetails?.username}
            </CustomText>

            <CustomText customClassName="text-white">
              {cardDetails?.cardName}
            </CustomText>

            <CustomText customClassName="text-white py-4">
              {cardDetails?.cardNumber}
            </CustomText>
            <View className="flex-row items-center justify-between">
              <CustomText customClassName="text-white" fontFamily="PoppinsBold">
                {formatCurrency(cardDetails?.availableBalance)}
              </CustomText>
            </View>
          </View>
          <View className="items-end justify-end p-6 absolute bottom-0 left-[250px]">
            <CustomText
              customClassName="text-white text-2xl"
              fontFamily="PoppinsBold"
            >
              {cardDetails?.cardType}
            </CustomText>
          </View>
          <View className="h-[150px] bg-[#4EB4FF] w-[25%] rounded-tl-full rounded-bl-full"></View>
        </View>

        <View className="flex-1 pt-6">
          <View className="w-full flex-row flex-wrap gap-2">
            {HomeCardArrays?.map((cards, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  className="items-center justify-center flex-3 w-[31%] py-4 rounded-xl bg-white"
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
      </View>
    </MainWrapper>
  );
}

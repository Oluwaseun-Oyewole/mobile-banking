import ATMCardComponent from "@/components/atm";
import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { HomeCardArrays } from "@/helper/constants";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { useSharedValue, withSpring } from "react-native-reanimated";

const width = Dimensions.get("window").width;
const height = Math.floor(Dimensions.get("window").height * 0.23);

const images = [
  {
    imagePath: require("@/assets/images/visa.png"),
    width: width * 0.8,
    height: width * 0.64,
  },
  {
    imagePath: require("@/assets/images/orange_visa.png"),
    width: width * 0.77,
    height: width * 0.62,
  },
  {
    imagePath: require("@/assets/images/visa.png"),
    width: width * 0.73,
    height: width * 0.59,
  },
];

const HomeScreen = () => {
  const animatedValueIndex = useSharedValue(0);
  const flingUp = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      if (animatedValueIndex.value > images.length) return;
      if (animatedValueIndex.value == 0) return;
      animatedValueIndex.value = withSpring(animatedValueIndex.value - 1, {
        damping: 10,
        stiffness: 40,
        mass: 2,
      });
    });

  const flingDown = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      if (animatedValueIndex.value === images.length) return;
      if (animatedValueIndex.value === images.length - 1) return;
      animatedValueIndex.value = withSpring(animatedValueIndex.value + 1, {
        damping: 10,
        stiffness: 40,
        mass: 2,
      });
    });

  const { push } = useRouter();

  return (
    <MainWrapper backgroundColor="#fff">
      <View style={styles.card_container}>
        <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
          <View className="items-center justify-center">
            {images?.map((card, index) => (
              <ATMCardComponent
                key={index}
                index={index}
                animatedValueIndex={animatedValueIndex}
                card={card}
              />
            ))}
          </View>
        </GestureDetector>
      </View>

      <View className="w-full flex-row flex-wrap justify-between">
        {HomeCardArrays?.map((cards, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="items-center justify-center w-[31%] py-4 rounded-xl mb-4"
              onPress={() => push(cards?.link!)}
              style={styles.atm_card}
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
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  card_container: {
    height: height + 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 5,
  },
  card: {
    borderRadius: 15,
    borderCurve: "continuous",
    shadowColor: "#cccccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  atm_card: {
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: "#b9b9b9",
  },
  image_card: {
    position: "absolute",
  },
});

export default HomeScreen;

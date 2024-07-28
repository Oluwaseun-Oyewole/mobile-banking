import { CustomText } from "@/components/text";
import { formatCurrency } from "@/helper";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const width = Dimensions.get("window").width;
const height = Math.floor(Dimensions.get("window").height * 0.23);

const ATMCardComponent = ({
  index,
  animatedValueIndex,
  card,
}: {
  index: number;
  animatedValueIndex: SharedValue<number>;
  card: Record<string, any>;
}) => {
  const [showPin, setShowPin] = useState(false);

  const handleShowPin = () => {
    setShowPin(!showPin);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            animatedValueIndex.value,
            [index - 1, index, index + 1],
            [0.96, 1, 1]
          ),
        },
        {
          translateX: interpolate(
            animatedValueIndex.value,
            [index - 1, index, index + 1],
            [0, 0, width * 0.84],
            { extrapolateRight: Extrapolation.CLAMP }
          ),
        },

        {
          translateY: interpolate(
            animatedValueIndex.value,
            [index - 1, index, index + 1],
            [22, 0, 22],
            { extrapolateRight: Extrapolation.CLAMP }
          ),
        },
      ],
      opacity: interpolate(
        animatedValueIndex.value,
        [index - 1, index, index + 1],
        [1, 1, 1]
      ),
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        styles.image_card,
        {
          zIndex: -index,
        },
        animatedStyles,
      ]}
    >
      <ImageBackground
        key={index}
        source={card.imagePath}
        style={{ width: card.width, height: card.height }}
        className="flex-1 items-start pl-4 justify-center"
      >
        <View>
          <CustomText
            fontFamily="PoppinsMedium"
            customClassName="text-white text-xl"
          >
            Seun Samuel
          </CustomText>
          <CustomText customClassName="text-white pt-8">
            Amazon Platinum
          </CustomText>
          <View className="flex-row items-center pt-2">
            {showPin ? (
              <>
                <CustomText
                  fontFamily="PoppinsMedium"
                  customClassName="text-white pr-4 text-lg"
                >
                  2020 **** **** 8783
                </CustomText>
                <Ionicons
                  name="eye"
                  size={18}
                  color="#fff"
                  onPress={handleShowPin}
                />
              </>
            ) : (
              <>
                <CustomText customClassName="text-white pr-4 text-lg">
                  2020 3456 1253 8783
                </CustomText>
                <Ionicons
                  name="eye-off"
                  size={18}
                  color="#fff"
                  onPress={handleShowPin}
                />
              </>
            )}
          </View>
          <CustomText
            fontFamily="PoppinsMedium"
            customClassName="text-white pt-4 text-lg"
          >
            {formatCurrency(78787)}
          </CustomText>
        </View>
      </ImageBackground>
    </Animated.View>
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

  image_card: {
    position: "absolute",
  },
});

export default ATMCardComponent;

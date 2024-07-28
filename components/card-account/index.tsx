import { images } from "@/helper/constants";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import { useSharedValue, withSpring } from "react-native-reanimated";
import ATMCardComponent from "../atm";
import CustomButton from "../button";

const height = Math.floor(Dimensions.get("window").height * 0.23);
export const CardComponent = () => {
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

  return (
    <View
      className="items-center justify-between"
      style={{ height: Dimensions.get("window").height * 0.65 }}
    >
      <View style={styles.card_container}>
        <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
          <View className="items-center justify-center mt-20">
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

      <CustomButton buttonText="Add Card" />
    </View>
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
});

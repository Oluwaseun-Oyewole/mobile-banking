import { CustomText } from "@/components/text";
import { View } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const cards = [
  {
    name: "Seun",
    age: 40,
    profession: "Software engineer",
  },

  {
    name: "Samuel",
    age: 80,
    profession: "Frontend engineer",
  },

  {
    name: "John",
    age: 20,
    profession: "Backend engineer",
  },
  {
    name: "Samuel",
    age: 80,
    profession: "Frontend engineer",
  },
];

{
  /* <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
        <Animated.View>
          {cards?.map((card, index) => {
            return (
              <CardComponent
                key={index}
                card={card}
                index={index}
                activeIndex={activeIndex}
                totalLength={cards.length}
              />
            );
          })}
        </Animated.View>
      </GestureDetector> */
}

const CardComponent = ({
  card,
  index,
  activeIndex,
  totalLength,
}: {
  card: (typeof cards)[0];
  index: number;
  activeIndex: SharedValue<number>;
  totalLength: number;
}) => {
  // const flingUp = Gesture.Fling()
  //   .direction(Directions.UP)
  //   .onStart(() => {
  //     if (activeIndex.value === cards.length) return;
  //     activeIndex.value = withTiming(activeIndex.value - 1, { duration: 600 });
  //   });
  // const flingDown = Gesture.Fling()
  //   .direction(Directions.DOWN)
  //   .onStart(() => {
  //     if (activeIndex.value === cards.length) return;
  //     activeIndex.value = withTiming(activeIndex.value + 1, { duration: 600 });
  //   });

  const customAnimatedStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      opacity: interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [1, 1, 1]
      ),
      zIndex: totalLength - index,
      transform: [
        {
          translateY: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [22, 0, 230 + 22],
            { extrapolateRight: Extrapolation.CLAMP }
          ),
        },
        {
          scale: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [0.96, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[customAnimatedStyles]}
        key={index}
        className={
          "bg-gray-300 00 h-[200px] my-2 items-center justify-center w-full rounded-lg "
        }
      >
        <Animated.Text>{card.name}</Animated.Text>
        <CustomText>{card.age}</CustomText>
        <CustomText>{card.profession}</CustomText>
      </Animated.View>
    </View>
  );
};

export default CardComponent;

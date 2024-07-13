import type { PropsWithChildren } from "react";
import { View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

type Props = {} & PropsWithChildren;

export default function ParallaxScrollView({ children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <View>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}

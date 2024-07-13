import ParallaxScrollView from "@/components/parallax";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <ParallaxScrollView>
      <SafeAreaView>
        <View>
          <Text>HomePage</Text>
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  );
};

export default HomePage;

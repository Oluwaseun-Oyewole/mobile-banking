import ParallaxScrollView from "@/components/parallax";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { Link } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <SafeAreaView>
        <View className="items-center justify-center">
          <CustomText>Authenticated Home Screen</CustomText>
          <CustomText>Top Rated Top Rated banks in Nigeria</CustomText>
          <CustomText customClassName="text-blue-700" fontFamily="PoppinsBold">
            <Link href={Routes.login}>Logout</Link>
          </CustomText>
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  );
}

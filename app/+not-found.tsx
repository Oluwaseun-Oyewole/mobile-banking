import ParallaxScrollView from "@/components/parallax";
import { CustomText } from "@/components/text";
import { Routes } from "@/routes/routes";
import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ParallaxScrollView>
        <SafeAreaView>
          <View className="h-screen justify-center items-center font-bold">
            <CustomText>This screen doesn't exist.</CustomText>
            <Link href={Routes.login}>
              <CustomText fontFamily="PoppinsBold">
                Go to login screen!
              </CustomText>
            </Link>
          </View>
        </SafeAreaView>
      </ParallaxScrollView>
    </>
  );
}

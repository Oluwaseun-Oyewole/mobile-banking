import { renderRouteBoolean } from "@/helper";
import { AuthScreensTitle } from "@/helper/constants";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren } from "react";
import { TouchableOpacity, View } from "react-native";
import ParallaxScrollView from "../parallax";
import { CustomText } from "../text";

const AuthWrapper = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const getTitle = pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];
  const router = useRouter();

  return (
    <ParallaxScrollView>
      <View>
        <StatusBar
          backgroundColor={renderRouteBoolean(pathname) ? "#3629B7" : "#fff"}
          style={`${renderRouteBoolean(pathname) ? "light" : "dark"}`}
          animated
        />
        <View
          className={`${
            renderRouteBoolean(pathname) ? "bg-[#3629B7]" : "#fff"
          } h-[100px] w-full justify-center pt-11 px-8`}
        >
          <View className="items-center flex-row">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-back-outline"
                size={22}
                color={renderRouteBoolean(pathname) ? "#fff" : "#000"}
              />
            </TouchableOpacity>
            <CustomText
              className={`${
                renderRouteBoolean(pathname) ? "text-white" : "text-black"
              } pl-3 text-[17px]`}
              fontFamily="PoppinsBold"
            >
              {AuthScreensTitle[getTitleEnum]}
            </CustomText>
          </View>
        </View>
        <View
          className={renderRouteBoolean(pathname) ? "bg-primary" : "bg-white"}
        >
          <View className="px-8 bg-white rounded-tr-3xl rounded-tl-3xl">
            {children}
          </View>
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default AuthWrapper;

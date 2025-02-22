import { renderRouteBoolean } from "@/helper";
import { MainScreensTitle } from "@/helper/constants";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren } from "react";
import { TouchableOpacity, View } from "react-native";
import ParallaxScrollView from "../parallax";
import { CustomText } from "../text";

type MainWrapperPropsType = PropsWithChildren & {
  backgroundColor?: string;
  height?: number;
};

const MainWrapper = ({
  children,
  backgroundColor = "#F2F1F9",
  height = 90,
}: MainWrapperPropsType) => {
  const pathname = usePathname();
  const getTitle = pathname.split("/");
  const getTitleEnum = getTitle[getTitle.length - 1];
  const router = useRouter();

  return (
    <ParallaxScrollView>
      <StatusBar
        backgroundColor={renderRouteBoolean(pathname) ? "#3629B7" : "#fff"}
        style={`${renderRouteBoolean(pathname) ? "light" : "dark"}`}
        animated
      />

      <View
        className={`${
          renderRouteBoolean(pathname) ? "bg-[#3629B7]" : "bg-white"
        } w-full justify-center px-7`}
        style={{ height }}
      >
        <View className="items-center flex-row">
          {pathname !== "/" ? (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons
                name="chevron-back-outline"
                size={22}
                color={renderRouteBoolean(pathname) ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          ) : (
            <View className="flex-row justify-between items-center flex-1">
              <View className="items-center justify-center h-[40px]">
                <Image
                  className="w-[40px] h-full"
                  placeholder="illustration icon"
                  contentFit="cover"
                  transition={1000}
                  source={require("@/assets/images/Avatar.png")}
                />
              </View>
              <CustomText
                customClassName="text-white"
                fontFamily="PoppinsMedium"
              >
                Hi, Samuel Oyewole
              </CustomText>

              <TouchableOpacity onPress={() => router.back()}>
                <Link href={Routes.notification}>
                  <Ionicons
                    name="notifications"
                    size={30}
                    color={renderRouteBoolean(pathname) ? "#fff" : "#000"}
                  />
                </Link>
              </TouchableOpacity>
            </View>
          )}
          <CustomText
            className={`${
              renderRouteBoolean(pathname) ? "text-white" : "text-black"
            } pl-3 text-[17px]`}
            fontFamily="PoppinsBold"
          >
            {MainScreensTitle[getTitleEnum]}
          </CustomText>
        </View>
      </View>

      <View
        className={renderRouteBoolean(pathname) ? "bg-primary" : "bg-white"}
      >
        <View
          className={`${
            renderRouteBoolean(pathname) &&
            "rounded-tr-[40px] rounded-tl-[40px]"
          } px-8 h-full`}
          style={{ backgroundColor }}
        >
          {children}
        </View>
      </View>
    </ParallaxScrollView>
  );
};

export default MainWrapper;

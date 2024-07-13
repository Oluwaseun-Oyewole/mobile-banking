import { Stack, usePathname } from "expo-router";
import React from "react";

const AuthLayout = () => {
  const pathname = usePathname();
  const currentRoute = pathname;
  return (
    <Stack
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: `${
    //       currentRoute === "/login" || currentRoute === "/register"
    //         ? "#3629B7"
    //         : "#fff"
    //     }`,
    //   },
    //   headerTintColor: `${
    //     currentRoute === "/login" || currentRoute === "/register"
    //       ? "#fff"
    //       : "#000"
    //   }`,
    //   headerTitleStyle: {
    //     fontWeight: "bold",
    //     fontFamily: "PoppinsBold",
    //     color: `${
    //       currentRoute === "/login" || currentRoute === "/register"
    //         ? "#fff"
    //         : "#000"
    //     }`,
    //     fontSize: 17,
    //   },
    //   header: ({ options, route }) => {
    //     return (
    //       <View className="bg-pimary h-[100px] items-start justify-center px-8">
    //         {/* <Link href={route.path!}>Back</Link> */}
    //         <CustomText customClassName="text-black">Back</CustomText>
    //         <Header
    //           title={getHeaderTitle(options, route.name)}
    //           headerStyle={{ backgroundColor: "#fff" }}
    //           headerTitleStyle={{ color: "black" }}
    //         />
    //       </View>
    //     );
    //   },
    //   navigationBarColor: "#CACACA",
    //   navigationBarHidden: true,
    //   statusBarColor: "#3629B7",
    //   statusBarStyle: "light",
    //   statusBarAnimation: "slide",
    // }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Sign in",
        }}
      />

      <Stack.Screen name="register" options={{ title: "Sign Up" }} />

      <Stack.Screen
        name="forgot_password"
        options={{ title: "Forgot Password" }}
      />
    </Stack>
  );
};

export default AuthLayout;

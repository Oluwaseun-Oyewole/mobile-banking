import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { renderTabRoute } from "@/helper";
import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { subRoutes, tabRoutes } from "@/routes/tab.routes";
import { Redirect, Tabs, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";

function AppLayout() {
  const { session, isLoading, currentUser } = useSession();
  const pathname = usePathname();
  if (currentUser === false) {
    return <Redirect href={Routes.Home} />;
  }

  const windowHeight = Math.floor(Dimensions.get("window").height);
  const [height, setHeight] = useState(0);
  const { scrollBar } = useSession();

  useEffect(() => {
    setHeight(200);
  }, [height]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
          display: `${renderTabRoute(pathname) ? "flex" : "none"}`,
          backgroundColor: "white",
          borderColor: "#fff",
          paddingHorizontal: 15,
        },
      }}
      backBehavior="history"
    >
      {tabRoutes?.map((tab, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={tab.routeTitle}
            options={{
              title: `${tab.routeTitle}`,
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    {focused ? (
                      <View className="bg-primary h-[40px] w-[100px] items-center justify-center rounded-3xl">
                        <TabBarIcon name={`${tab.tabIcon}`} color="#fff" />
                      </View>
                    ) : (
                      <>
                        <TabBarIcon name={`${tab.tabIcon}`} />
                      </>
                      //
                    )}
                  </View>
                );
              },
            }}
          />
        );
      })}

      {subRoutes?.map((tab, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={tab.routeTitle}
            options={{
              href: null,
              title: `${tab.routeTitle}`,
              headerShown: false,
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default AppLayout;

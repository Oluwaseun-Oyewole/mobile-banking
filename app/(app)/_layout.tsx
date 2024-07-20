import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";

export default function AppLayout() {
  const { session, isLoading, currentUser } = useSession();

  if (currentUser === false) {
    return <Redirect href={Routes.login} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: "#3629B7",
        tabBarStyle: { height: 70 },
      }}
      backBehavior="history"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View className="bg-primary h-[40px] w-[100px] items-center justify-center rounded-3xl">
                    <Ionicons
                      name="home-outline"
                      size={25}
                      color="#fff"
                      style={{ fontWeight: "bold" }}
                    />
                  </View>
                ) : (
                  <Ionicons name="home-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View className="bg-primary h-[40px] w-[100px] items-center justify-center rounded-3xl">
                    <Ionicons
                      name="search-outline"
                      size={25}
                      color="#fff"
                      style={{ fontWeight: "bold" }}
                    />
                  </View>
                ) : (
                  <Ionicons name="search-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "message",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View className="bg-primary h-[40px] w-[100px] items-center justify-center rounded-3xl">
                    <Ionicons
                      name="mail-outline"
                      size={25}
                      color="#fff"
                      style={{ fontWeight: "bold" }}
                    />
                  </View>
                ) : (
                  <Ionicons name="mail-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <View className="bg-primary h-[40px] w-[100px] items-center justify-center rounded-3xl">
                    <Ionicons
                      name="settings-outline"
                      size={23}
                      color="#fff"
                      style={{ fontWeight: "bold" }}
                    />
                  </View>
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="branch"
        options={{
          href: null,
          title: "branch",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="barbell" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="barbell" size={25} />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="interest"
        options={{
          href: null,
          title: "interest",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="exchange"
        options={{
          href: null,
          title: "exchange",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="exchange_rate"
        options={{
          href: null,
          title: "exchange_rate",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="language"
        options={{
          href: null,
          title: "language",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="password_change"
        options={{
          href: null,
          title: "password_change",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="app_info"
        options={{
          href: null,
          title: "app_info",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="settings-outline" size={25} color="#3629B7" />
                ) : (
                  <Ionicons name="settings-outline" size={25} />
                )}
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}

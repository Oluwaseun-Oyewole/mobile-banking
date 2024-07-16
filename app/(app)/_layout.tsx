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
        tabBarActiveBackgroundColor: "#3629B7",
        tabBarStyle: { height: 70 },
      }}
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
                  <Ionicons name="home-outline" size={25} color="white" />
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
                  <Ionicons name="search-outline" size={25} color="white" />
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
          tabBarIcon: ({ color, focused }) => {
            return (
              <View>
                {focused ? (
                  <Ionicons name="mail-outline" size={25} color="white" />
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
                  <Ionicons name="settings-outline" size={25} color="white" />
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

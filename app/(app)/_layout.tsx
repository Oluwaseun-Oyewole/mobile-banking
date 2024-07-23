import { renderTabRoute } from "@/helper";
import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs, usePathname } from "expo-router";
import { View } from "react-native";

export default function AppLayout() {
  const { session, isLoading, currentUser } = useSession();
  const pathname = usePathname();
  if (currentUser === false) {
    return <Redirect href={Routes.login} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: "#3629B7",
        tabBarStyle: {
          height: 70,
          display: `${renderTabRoute(pathname) ? "flex" : "none"}`,
        },
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
        }}
      />
      <Tabs.Screen
        name="interest"
        options={{
          href: null,
          title: "interest",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="exchange"
        options={{
          href: null,
          title: "exchange",
          headerShown: false,
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
        }}
      />

      <Tabs.Screen
        name="password_change"
        options={{
          href: null,
          title: "password_change",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="app_info"
        options={{
          href: null,
          title: "app_info",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          href: null,
          title: "notification",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="[notification_details]"
        options={{
          href: null,
          title: "[notification_details]",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="transfer"
        options={{
          href: null,
          title: "transfer",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="confirm"
        options={{
          href: null,
          title: "confirm",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="transfer_success"
        options={{
          href: null,
          title: "transfer_success",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="transaction_report"
        options={{
          href: null,
          title: "transaction_report",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="beneficiary"
        options={{
          href: null,
          title: "beneficiary",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="withdrawal"
        options={{
          href: null,
          title: "withdrawal",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

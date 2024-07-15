import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";

export default function AppLayout() {
  const { session, isLoading, currentUser } = useSession();

  if (currentUser === false) {
    return <Redirect href={Routes.login} />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={25} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="mail-outline" size={25} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={25} />
          ),
        }}
      />
    </Tabs>
  );
}

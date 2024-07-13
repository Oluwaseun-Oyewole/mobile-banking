import { useSession } from "@/hooks/useSession";
import { Routes } from "@/routes/routes";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const { session, isLoading, currentUser } = useSession();

  if (currentUser) {
    return <Redirect href={Routes.login} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>
  );
}

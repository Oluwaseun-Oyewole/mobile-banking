import type { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {} & PropsWithChildren;

export default function ParallaxScrollView({ children }: Props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            backgroundColor: "#fff",
            flexGrow: 1,
          }}
          keyboardDismissMode="on-drag"
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

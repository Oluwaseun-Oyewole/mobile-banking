import { useSession } from "@/hooks/useSession";
import { Image } from "expo-image";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Alert, View } from "react-native";
import { CustomText } from "../text";

const BiometricAuthentication = ({
  route,
  setIsBiometricValid,
}: {
  route?: string;
  setIsBiometricValid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isBiometricSupported, updateBiometric, updateCurrentUser } =
    useSession();
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      updateBiometric(compatible!);
    })();
  }, []);

  const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert.alert(
        "Biometric record not found",
        "Please check your biometric settings and try again.",
        [{ text: "OK" }]
      );
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      push(route!);
      updateCurrentUser();
      setIsBiometricValid(true);
    } else {
      Alert.alert("Authentication failed", "Please try again.", [
        { text: "OK" },
      ]);
    }
  };

  return (
    <View>
      <View className="h-[100px] items-center justify-center pt-10">
        {isBiometricSupported ? (
          <View className="h-[75px]">
            <Image
              className="h-full w-[75px]"
              placeholder="illustration icon"
              contentFit="cover"
              transition={1000}
              source={require("@/assets/images/Fingerprint.svg")}
              onTouchStart={handleBiometricAuth}
            />
          </View>
        ) : (
          <CustomText
            customClassName="pt-10 text-sm"
            fontFamily="PoppinsMedium"
          >
            Biometric authentication is not supported on this device.
          </CustomText>
        )}
      </View>
    </View>
  );
};

export default BiometricAuthentication;

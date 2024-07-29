import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { notification } from "@/helper/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Notification = () => {
  return (
    <MainWrapper backgroundColor="#fff">
      <View>
        {notification?.map((not, index) => {
          return (
            <View
              className="w-full flex-row items-center justify-between px-3 h-[90px] rounded-lg bg-primary4"
              style={styles.card}
            >
              <View className="flex-row items-center gap-2">
                <Ionicons name="notifications" color="#000" size={25} />
                <View>
                  <CustomText customClassName="" fontFamily="PoppinsMedium">
                    {not.title}
                  </CustomText>
                  <CustomText customClassName="text-xs pt-1">
                    {not.details}
                  </CustomText>
                </View>
              </View>
              <TouchableOpacity>
                <Link
                  href={{
                    pathname: `/${not.title}`,
                    params: { detail: `${not.details}` },
                  }}
                >
                  <Ionicons name="chevron-forward-outline" size={20} />
                </Link>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </MainWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 8,
    shadowColor: "#000",
    elevation: 2,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

export default Notification;

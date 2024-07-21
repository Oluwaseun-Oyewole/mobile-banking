import MainWrapper from "@/components/main/wrapper";
import { CustomText } from "@/components/text";
import { notification } from "@/helper/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const Notification = () => {
  return (
    <MainWrapper>
      <View className="mt-3">
        {notification?.map((not, index) => {
          return (
            <View className="bg-gray-200 w-full px-3 py-4 rounded-lg flex-row justify-between mt-4">
              <View className="flex-row items-center">
                <Ionicons name="notifications" color="#3629B7" size={25} />
                <CustomText customClassName="pl-2">{not.title}</CustomText>
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

export default Notification;

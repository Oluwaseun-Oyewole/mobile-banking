import ParallaxScrollView from "@/components/parallax";
import { CustomText } from "@/components/text";
import { Ionicons } from "@expo/vector-icons";
import Location from "expo-location";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";

type IPositionType = {
  lat: number;
  lng: number;
};

const Branch = () => {
  const [{ latitude, longitude }, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const googlePlacesRef = useRef<TextInputProps>(null);
  const mapRef = useRef<any>(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
      });
    })();
  }, []);

  const places: IPositionType[] = [
    {
      lat: 51.5074,
      lng: 0.1278,
    },
    {
      lat: 46.8182,
      lng: 8.2275,
    },

    {
      lat: 6.5244,
      lng: 3.3792,
    },

    {
      lat: 40.463,
      lng: 3.7492,
    },

    {
      lat: 55.953251,
      lng: -3.188267,
    },
  ];

  const clearInput = () => {
    setAutoCompleteValue("");
    // googlePlacesRef.current?.clear();
  };

  const zoomInRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <>
      <StatusBar backgroundColor={"#fff"} style="light" animated />
      <View
        className={`${"bg-white"} h-[140px] w-full justify-center pt-11 px-8`}
      >
        <View className="items-center flex-row">
          <TouchableOpacity onPress={() => router.back()} className="pr-5">
            <Ionicons name="chevron-back-outline" size={22} color={"#000"} />
          </TouchableOpacity>

          <CustomText
            className={`${"text-black"} text-[20px]`}
            fontFamily="PoppinsBold"
          >
            Branch
          </CustomText>
        </View>
      </View>
      <>
        <View className="flex-1 h-[20vh] bg-white">
          {errorMsg ? (
            <CustomText>{errorMsg}</CustomText>
          ) : (
            <ParallaxScrollView>
              <MapView className="h-[60vh]">
                <Marker
                  // draggable
                  // flat
                  onPress={() =>
                    mapRef.current.animateToRegion(zoomInRegion, 2000)
                  }
                  // image={{ uri: require("@/assets/images/account.png") }}
                  coordinate={{ latitude: 37.0902, longitude: 95.7129 }}
                />
                {places.map((place, i) => (
                  <>
                    <Marker
                      // draggable
                      // flat
                      // icon={{ uri: require("@/assets/images/account.png") }}
                      // image={{ uri: require("@/assets/images/location.svg") }}
                      key={i}
                      coordinate={{
                        latitude: place.lat,
                        longitude: place?.lng,
                      }}
                    />
                  </>
                ))}
              </MapView>
            </ParallaxScrollView>
          )}

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            className=""
          >
            <GooglePlacesAutocomplete
              styles={{
                container: {
                  border: "2px red solid",
                  borderColor: "green",
                  height: 200,
                  paddingHorizontal: 20,
                  paddingTop: 20,
                },
                textInputContainer: {
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                textInput: {
                  fontFamily: "PoppinsMedium",
                  borderColor: "#D1D1D1",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderRadius: 20,
                  height: 60,
                  paddingHorizontal: 20,
                },
                powered: { opacity: 0 },
                description: { fontFamily: "PoppinsRegular" },
              }}
              enablePoweredByContainer={false}
              isRowScrollable
              numberOfLines={5}
              onNotFound={() => (
                <View>
                  <CustomText>Place not found</CustomText>
                </View>
              )}
              keepResultsAfterBlur
              predefinedPlaces={[
                {
                  description: "Mobile banking branch 1",
                  geometry: { location: { lat: 51.5074, lng: 0.1278 } },
                },
                {
                  description: "Mobile banking branch 2",
                  geometry: { location: { lat: 46.8182, lng: 8.2275 } },
                },

                {
                  description: "mobile banking HeadQuarters",
                  geometry: { location: { lat: 6.5244, lng: 3.3792 } },
                },

                {
                  description: "Mobile banking branch 4",
                  geometry: { location: { lat: 40.463, lng: 3.7492 } },
                },

                {
                  description: "Mobile banking branch 5",
                  geometry: { location: { lat: 55.953251, lng: -3.188267 } },
                },
              ]}
              placeholder="Search"
              renderRow={(row, index) => (
                <View key={index} className="flex-row items-center">
                  <Ionicons
                    name="location-sharp"
                    size={25}
                    color="#5655B9"
                    style={{ fontWeight: "bold" }}
                  />
                  <CustomText customClassName="pl-4">
                    {row?.description}
                  </CustomText>
                </View>
              )}
              textInputProps={{
                inputMode: "search",
                value: autoCompleteValue,
                onChangeText: (text) => setAutoCompleteValue(text),

                // InputComp: (props: TextInputProps) => (
                //   <View className="w-full">
                //     <TextInput
                //       {...props}
                //       className="relative"
                //       value={autoCompleteValue}
                //     />
                //     {autoCompleteValue ? (
                //       <TouchableOpacity onPress={clearInput}>
                //         <Ionicons
                //           name="close-circle"
                //           size={20}
                //           color="gray"
                //           className="absolute"
                //         />
                //       </TouchableOpacity>
                //     ) : null}
                //   </View>
                // ),
              }}
              query={{
                key: "AIzaSyBd0vAku9eywLaQkzxlE0iwFb8aSu9OEyI",
                language: "en",
              }}
            />
          </KeyboardAvoidingView>
        </View>
      </>
    </>
  );
};

export default Branch;

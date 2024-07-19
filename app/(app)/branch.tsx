import { CustomText } from "@/components/text";
import { Ionicons } from "@expo/vector-icons";
import Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Marker } from "react-native-maps";
import { Modalize } from "react-native-modalize";

type IPositionType = {
  lat: number;
  lng: number;
  country: string;
  description: string;
  street: string;
  zipCode: string;
  location: string;
};

const Branch = () => {
  const modalizeRef = useRef<Modalize>(null);
  const router = useRouter();
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const [{ latitude, longitude }, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, long: 0 });
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
      lat: 51.1657,
      lng: 10.4515,
      country: "Germany",
      description: "First branch",
      street: "	Humboldtstrasse 13, Gladbeck, North Rhine-Westphalia",
      zipCode: "45964",
      location: "Berlin",
    },
    {
      lat: 40.4637,
      lng: 3.7492,
      country: "Spain",
      description: "Second branch",
      street: "Plaza Ramon Pelayo, s/n, Santillana del Mar, 	Cantabria",
      zipCode: "39330",
      location: "Madrid",
    },

    {
      lat: 9.082,
      lng: 8.6753,
      country: "Nigeria",
      description: "Headquater (Lagos)",
      street: "4 Tiwalade close, 	Ikeja, Lagos",
      location: "Lagos",
      zipCode: "100281",
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
    <GestureHandlerRootView>
      <View className="flex-1 bg-white relative">
        {errorMsg ? (
          <CustomText>{errorMsg}</CustomText>
        ) : (
          <MapView className="h-full" mapType="standard">
            <Marker
              // draggable
              // flat
              onPress={() => mapRef.current.animateToRegion(zoomInRegion, 2000)}
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
                  onPress={() =>
                    setSelectedLocation({ lat: place?.lat, long: place?.lng })
                  }
                >
                  <Callout
                    tooltip
                    style={{
                      width: 300,
                      height: 200,
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.7)",
                      flex: 1,
                      alignItems: "flex-start",
                      justifyContent: "center",
                      borderRadius: 200,
                      padding: 10,
                    }}
                  >
                    <View>
                      <CustomText
                        customClassName="text-white"
                        fontFamily="PoppinsMedium"
                      >
                        Lat - {place?.lat}
                      </CustomText>
                      <CustomText
                        customClassName="text-white"
                        fontFamily="PoppinsMedium"
                      >
                        Long - {place?.lng}
                      </CustomText>
                      <CustomText
                        customClassName="text-white"
                        fontFamily="PoppinsMedium"
                      >
                        Country - {place?.country}
                      </CustomText>
                      <CustomText
                        customClassName="text-white"
                        fontFamily="PoppinsMedium"
                      >
                        Address - {place?.street}
                      </CustomText>
                      <CustomText
                        customClassName="text-white"
                        fontFamily="PoppinsMedium"
                      >
                        Branch - {place?.description}
                      </CustomText>
                    </View>
                  </Callout>
                </Marker>
              </>
            ))}
          </MapView>
        )}

        <View className="absolute items-end justify-end h-full w-full p-4">
          <TouchableOpacity
            onPress={onOpen}
            className="bg-black rounded-md p-4"
          >
            <CustomText
              customClassName="text-sm text-white"
              fontFamily="PoppinsMedium"
            >
              Search branches
            </CustomText>
          </TouchableOpacity>

          <Modalize ref={modalizeRef}>
            <TouchableOpacity onPress={() => modalizeRef?.current?.close()}>
              <View className="justify-end items-end p-4">
                <CustomText fontFamily="PoppinsBold" customClassName="">
                  Close
                </CustomText>
              </View>
            </TouchableOpacity>

            <>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className=""
              >
                <GooglePlacesAutocomplete
                  styles={{
                    container: {
                      border: "2px red solid",
                      borderColor: "green",
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
                      geometry: {
                        location: { lat: 55.953251, lng: -3.188267 },
                      },
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
            </>
          </Modalize>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Branch;

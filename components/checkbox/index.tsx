import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";

const CustomCheckbox = () => {
  const [checkedState, setCheckedState] = useState(false);
  return (
    <Pressable onPress={() => setCheckedState(!checkedState)}>
      {checkedState && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
};

export default CustomCheckbox;

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globaleStyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globaleStyles.container}>
      <Text style={globaleStyles.titleText}>Home Screen</Text>
    </View>
  );
}

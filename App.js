import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
const logoImage = require("./assets/icon.png");
import React, { useState } from "react";
import Box from "./components/Box";
import TouchableHighlightExample from "./components/TouchableHiglightExample";
import TouchableOpacityExample from "./components/TouchableOpacity";
import TouchableWithoutFeedbackExample from "./components/TouchableWithoutFeedback";
import TouchableNativeFeedbackExample from "./components/TouchableNativeFeedbackExample";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [text, setText] = useState("");
  return (
    <ScrollView style={styles.container}>
      <Text>
        <Text style={{ color: "white" }}>hello</Text> worldb
      </Text>

      <TextInput
        placeholder="enter any text"
        onChangeText={(text) => setText(text)}
        style={{ height: 40 }}
      />

      <Image source={logoImage} style={{ width: 100, height: 100 }} />

      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{ width: 100, height: 100 }}
      />

      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>Hello world</Text>
      </ImageBackground>
      

      <TouchableHighlightExample />
      <TouchableOpacityExample />
      <TouchableWithoutFeedbackExample />
      <TouchableNativeFeedbackExample />
      <LoginForm />
      <View>
        <Box style={{ backgroundColor: "pink" }}>Box 1</Box>
        <Box style={{ backgroundColor: "green" }}>Box 2</Box>
        <Box style={{ backgroundColor: "yellow" }}>Box 3</Box>
        <Box style={{ backgroundColor: "red" }}>Box 4</Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    borderWidth: 6,
    borderColor: "black",
  },
});

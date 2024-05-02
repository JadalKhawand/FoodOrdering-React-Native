import { View, Text, Pressable } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {useState} from 'react'
const onBoardingSteps = [
  {
    icon: "people-arrows",
    title: "Welcome to the app",
    description: "hello world",
  },
  {
    icon: "snowflake",
    title: "Buy and Sell",
    description: "The best E-Commerce app",
  },
  {
    icon: "anchor",
    title: "Create you account by verifying you phone number",
    description: "verify here",
  },
];

const onBoarding = () => {
  const router = useRouter();
const [screenIndex, setScreenIndex] = useState(1)

const data = onBoardingSteps[screenIndex]

const onNext = () =>{
  const isLastScreen = screenIndex === onBoardingSteps.length-1;
  if(isLastScreen)
    endOnBoarding()
  else
  setScreenIndex(screenIndex+1)
}

const endOnBoarding = () =>{
  setScreenIndex(0)
  router.navigate('/menu')

}

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <FontAwesome5 name={data.icon} size={70}></FontAwesome5>
      <Text style={{ fontSize: 30 }}>{data.title}</Text>
      <Text style={{ fontSize: 30 }}>{data.description}</Text>
      <View style={styles.buttonsRow}>
        <Text style={styles.buttonText1}>Skip</Text>
          <Pressable onPress={onNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonsRow: {
    position: "absolute",
    bottom: 30,
    right: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  buttonText1: {
    fontSize: 16,
    color: "red",
  },
});

export default onBoarding;

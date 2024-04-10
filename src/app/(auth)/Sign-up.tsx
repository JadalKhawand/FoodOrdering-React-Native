import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { Link, Stack } from "expo-router";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Sign up'}}/>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="john@gmail.com"
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button text="Create account" />
      <Link style={styles.textButton} href={"/(auth)/Sign-in"}>
        Sign in
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "grey",
    fontSize: 16,
  },
  textButton: {
    alignSelf: "center",
    color: "blue",
  },
});

export default SignupPage;

import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { Link, Redirect, Stack } from "expo-router";
import { supabase } from "@/lib/supabase";
import { MaterialIcons } from "@expo/vector-icons";
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

async function signUpWithEmail(){
  setLoading(true);
  const {error} = await supabase.auth.signUp({email,password})
  if(error) Alert.alert(error.message)
  setLoading(false);
  
}

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
      <View style={styles.passwordContainer}>

<TextInput
  value={password}
  onChangeText={setPassword}
  style={styles.inputPassword}
  secureTextEntry={!showPassword}
  />
<TouchableOpacity
  style={styles.toggleButton}
  onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state on press
  >
  <MaterialIcons
    name={showPassword ? 'visibility-off' : 'visibility'} // Show eye icon based on showPassword state
    size={24}
    color="gray"
    />
</TouchableOpacity>
    </View>
      <Button onPress={signUpWithEmail} disabled={loading} text={loading?"Creating account...":"Create account"} />
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
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
},
passwordContainer:{
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: 'gray',
  borderRadius: 5,
  position: 'relative',
},
inputPassword:{
  flex:1,
  backgroundColor: "white",
  padding: 10,
  borderRadius: 5,
  marginTop: 5,
  marginBottom: 20,
}
});

export default SignupPage;

import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link, Redirect } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/lib/supabase";
import { useNavigation } from "@react-navigation/native";
const index = () => {
  const {session, loading, isAdmin} = useAuth()
  const navigation = useNavigation()
  if(loading){
    return <ActivityIndicator />
  }
  if(!session){
    return <Redirect href={'/Sign-in'}/>
  }
  if(!isAdmin){
    return <Redirect href={'/(user)'}/>
  }

  function handleSignOut(){
    supabase.auth.signOut()
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      

      <Button onPress={handleSignOut} text="Sign out"></Button>
    </View>
  );
};

export default index;

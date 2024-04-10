import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack(){
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Pressable style={{ flexDirection: 'row', marginRight: 15 }}>
            {({ pressed }) => (
              <>
                <Link href="/cart" asChild>
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color={Colors.light.tint}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                </Link>
                <Link href="/" asChild>
                  <FontAwesome
                    name="sign-in"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
                  />
                </Link>
              </>
            )}
          </Pressable>
        ),
      }}>
      <Stack.Screen name="index" options={{title: 'Menu'}}/>
    </Stack>
  );
}

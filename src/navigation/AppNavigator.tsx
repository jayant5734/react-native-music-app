import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayerScreen from "../screens/PlayerScreen";
import QueueScreen from "../screens/QueueScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Tabs: undefined;
  Player: undefined;
  Queue: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ✅ Bottom Tab Navigator (Home/Favorites/Playlists/Settings) */}
      <Stack.Screen name="Tabs" component={TabNavigator} />

      {/* ✅ Full screens */}
      <Stack.Screen name="Player" component={PlayerScreen} />
      <Stack.Screen name="Queue" component={QueueScreen} />
    </Stack.Navigator>
  );
}

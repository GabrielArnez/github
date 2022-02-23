import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserRepo } from "../views/UserRepo";
import { Home } from "../views/Home";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Initial"
    >
      <Stack.Screen name="Initial" component={Home} />
      <Stack.Screen name="UserRepo" component={UserRepo} />
    </Stack.Navigator>
  );
}

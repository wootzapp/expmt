import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthScreen } from "../screens/auth/AuthScreen";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { AuthInfoScreen } from "../screens/info/AuthInfoScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="auth"
        component={AuthScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="info"
        component={AuthInfoScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export const AuthNavigator = React.forwardRef<NavigationContainerRef<any>,
  Partial<React.ComponentProps<typeof NavigationContainer>>>((props, ref) => {
    return (
      <AuthStack />

    );
  });

AuthNavigator.displayName = "AuthNavigator";
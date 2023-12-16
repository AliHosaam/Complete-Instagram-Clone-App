import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import InitialLunchScreen from "./screens/InitialLunchScreen";
import SignUpScreen1 from "./screens/SignUpScreen1";
import SignUpScreen2 from "./screens/SignUpScreen2";
import LoginScreen from "./screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./screens/FeedScreen";
import SearchHomeScreen from "./screens/SearchHomeScreen";
import GalleryScreen from "./screens/GalleryScreen";
import ActivityNotificationScreen from "./screens/ActivityNotificationScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "./assets/colors/Colors";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tabs.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchHomeScreen"
        component={SearchHomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="plus-square" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ActivityNotificationScreen"
        component={ActivityNotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="InitialLunchScreen"
            component={InitialLunchScreen}
          />
          <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
          <Stack.Screen name="SignUpScreen2" component={SignUpScreen2} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActionsStackScreen, ContactsStackScreen } from "./navigation";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
  <AppTabs.Navigator
    tabBarOptions={{
      activeTintColor: "red",
      activeBackgroundColor: "blue",
    }}
  >
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => <AntDesign name="contacts" size={24} color="black" />,
      }}
      tabBarOptions={{
        activeTintColor: "red",
      }}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="assignment" size={24} color="black" />
        ),
      }}
    />
  </AppTabs.Navigator>
);

export default AppTabsScreen;

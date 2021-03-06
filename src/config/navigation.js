import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import ActionsList from "../screens/ActionsList";
import ActionsDetails from "../screens/ActionsDetails";
import AppTabsScreen from "./tabs";

const ContactsStack = createStackNavigator();

export const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen
      name="ContactList"
      component={ContactsList}
      options={{
        title: "Contacts",
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => ({
        headerTitle: `${route.params.contact.name.first} - ${route.params.contact.name.last}`,
      })}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
export const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen
      name="ActionsList"
      component={ActionsList}
      options={{ headerShown: false }}
    />
    <ActionsStack.Screen name="ActionsDetails" component={ActionsDetails} />
  </ActionsStack.Navigator>
);

export default () => (
  <NavigationContainer>
    {/*<ContactsStackScreen />*/}
    <AppTabsScreen />
  </NavigationContainer>
);

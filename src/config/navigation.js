import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ActionsList from "../screens/ActionsList";
import ActionsDetails from "../screens/ActionsDetails";

const ContactsStack = createStackNavigator();

const ContactsStackScreen = () => (
    <ContactsStack.Navigator>
        <ContactsStack.Screen
            name="ContactList"
            component={ContactsList}
            options={{
                title: "Contacts",
                headerShown: false
            }}
        />
        <ContactsStack.Screen
            name="ContactDetails"
            component={ContactDetails}
            options={({route}) => ({
                headerTitle: `${route.params.contact.name.first} - ${route.params.contact.name.last}`,
            })}
        />
    </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
    <ActionsStack.Navigator>
        <ActionsStack.Screen name="ActionsList" component={ActionsList} options={{ headerShown: false}}/>
        <ActionsStack.Screen name="ActionsDetails" component={ActionsDetails} />
    </ActionsStack.Navigator>
)

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen name="Contacts" component={ContactsStackScreen}/>
        <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
    </AppTabs.Navigator>
)

export default () => (
    <NavigationContainer>
        {/*<ContactsStackScreen />*/}
        <AppTabsScreen/>
    </NavigationContainer>
);

import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ActionsStackScreen, ContactsStackScreen} from "./navigation";

const AppTabs = createBottomTabNavigator();

const AppTabsScreen = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen name="Contacts" component={ContactsStackScreen}/>
        <AppTabs.Screen name="Actions" component={ActionsStackScreen}/>
    </AppTabs.Navigator>
)

export default AppTabsScreen;

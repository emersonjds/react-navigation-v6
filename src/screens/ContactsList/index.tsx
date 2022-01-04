import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import users from "../../data.json";

interface ContactsListProps {
  navigation: any;
}

const ContactsList: React.FC<ContactsListProps> = ({ navigation }) => {
  // const navigation = useNavigation();


  useEffect(() => {
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {users.results.map((user) => {
        return (
          <TouchableOpacity
            style={{
              height: 50,
              width: "100%",
              marginBottom: 1,
              paddingHorizontal: 10,
              paddingTop: 5,
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            key={user.name.first}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: "ContactDetails",
                      params: {
                        contact: user,
                      },
                    },
                  ],
                })
              );
            }}
          >
            <Text>{user.name.first}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ContactsList;

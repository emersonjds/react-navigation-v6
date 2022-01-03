import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import users from "../../data.json";

const ContactsList: React.FC = () => {
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
          >
            <Text>{user.name.first}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ContactsList;

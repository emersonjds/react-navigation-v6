import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import users from "../../data.json";

const ContactsList: React.FC = ({ navigation }) => {
  // const navigation = useNavigation();

  useEffect(() => {
    console.log("NAVIGATION", navigation);
  });

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
              navigation.navigate("ContactDetails", {
                contact: user,
              });
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

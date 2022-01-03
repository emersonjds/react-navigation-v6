import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import users from "../../data.json";

const ContactsList: React.FC = () => {
  return (
    <ScrollView>
      {users.results.map((user) => {
        return (
          <View
            style={{
              height: 50,
              width: "100%",
              marginBottom: 1,
              paddingHorizontal: 10,
              paddingTop: 5,
            }}
          >
            <Text>{user.name.first}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ContactsList;

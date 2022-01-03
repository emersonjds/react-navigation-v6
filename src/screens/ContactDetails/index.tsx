import React from "react";
import { Text, View } from "react-native";

const ContactDetails: React.FC = ({ route }) => {
  const contactInfo = route.params.contact;
  return (
    <View>
      <Text>{contactInfo.name.first}</Text>
    </View>
  );
};

export default ContactDetails;

import React from "react";
import { Text, View } from "react-native";

interface ContactDetailsProps {
  route: any;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ route }) => {
  const contactInfo = route.params.contact;
  return (
    <View>
      <Text>{contactInfo.name.first}</Text>
    </View>
  );
};

export default ContactDetails;

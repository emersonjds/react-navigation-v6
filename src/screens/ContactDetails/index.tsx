import React from "react";
import {Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";

interface ContactDetailsProps {
    route: RouteProp<any>
}

const ContactDetails: React.FC<ContactDetailsProps> = ({route}) => {
    // @ts-ignore
    const contactInfo = route.params.contact;
    return (
        <View>
            <Text>{contactInfo.name.first}</Text>
        </View>
    );
};

export default ContactDetails;

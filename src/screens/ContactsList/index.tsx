import { useNavigation, CommonActions } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// import users from "../../data.json";

interface ContactsListProps {
  navigation: any;
}

const ContactsList: React.FC<ContactsListProps> = ({ navigation }) => {
  // const navigation = useNavigation();

  const [dataApi, setDataApi] = React.useState(null);

  function getData() {
    const url =
      "https://api.pokemontcg.io/v2/cards?q=name:cinderace%20(subtypes:v)";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDataApi(data.data[2].images.large);

        // console.log("DADOS", data);

        console.log(data.data[0].set.images.symbol);
      })
      .catch((error) => {
        console.log("erro");
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Charizard V-Max
      </Text>

      {dataApi && (
        <Image
          source={{ uri: dataApi }}
          style={{ width: "90%", height: "90%" }}
          resizeMode="contain"
        />
      )}
      <Button title="Ver preço hoje"></Button>
    </View>
  );
  // <ScrollView showsVerticalScrollIndicator={false}>
  //   {users.results.map((user) => {
  //     return (
  //       <TouchableOpacity
  //         style={{
  //           height: 50,
  //           width: "100%",
  //           marginBottom: 1,
  //           paddingHorizontal: 10,
  //           paddingTop: 5,
  //           borderBottomColor: "#ccc",
  //           borderBottomWidth: 1,
  //           alignItems: "flex-start",
  //           justifyContent: "center",
  //         }}
  //         key={user.name.first}
  //         onPress={() => {
  //           navigation.dispatch(
  //             CommonActions.reset({
  //               index: 0,
  //               routes: [
  //                 {
  //                   name: "ContactDetails",
  //                   params: {
  //                     contact: user,
  //                   },
  //                 },
  //               ],
  //             })
  //           );
  //         }}
  //       >
  //         <Text>{user.name.first}</Text>
  //       </TouchableOpacity>
  //     );
  //   })}
  // </ScrollView>
  // );
};

export default ContactsList;

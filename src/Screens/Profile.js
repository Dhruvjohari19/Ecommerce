import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { Images } from "../Constants/Images";
import Card from "../components/Card";

const Profile = ({ route }) => {
  const userName = route.params.userData.firstName;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",

          backgroundColor: "red",

          justifyContent: "space-between",
        }}
      >
        <Image source={Images.Menu} />

        <Image source={Images.basket} />
        {/* <Text>My Basket</Text> */}
      </View>

      <View>
        <Text
          style={{
            color: "#27214D",
            fontFamily: "Brandon Grotesque",
            fontsize: 20,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.2px",
          }}
        >
          Hello {userName} !!!,
          <Text
            style={{
              color: "#27214D",
              fontFamily: "Brandon Grotesque",
              fontsize: 20,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            What fruit salad combo do you want today?
          </Text>
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={styles.container}>
          <Image source={Images.Search} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search for fruit salad combos"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Image source={Images.Menu} />
        </View>
      </View>

      <View style={{ marginHorizontal: 50, marginTop: 100 }}>
        <Text
          style={{
            color: "#27214D",
            textalign: "center",
            fontFamily: "Brandon Grotesque",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: 32 /* 133.333% */,
            letterSpacing: "-0.24px",
          }}
        >
          Recommended Combo
        </Text>
      </View>
      <Card />
      <View>
        <Text style={{}}>Hottest</Text>
      </View>
      <Card />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 288,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#F3F4F9",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

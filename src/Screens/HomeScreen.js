import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import ButtonComponent from "../components/ButtonComponent";
import { Images } from "../Constants/Images";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 500,
          backgroundColor: "#FFA451",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 301, height: 260, marginTop: 90 }}
          source={Images.HomeScreen}
        />
      </View>

      {/* Button and text part goes below */}
      <View>
        <View
          style={{
            marginTop: 155,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#27214D",

                fontFamily: "Brandon Grotesque",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              {" "}
              Get The Freshest Fruit Salad Combo
            </Text>
          </View>
          <Text
            style={{
              color: "#27214D",
              fontFamily: "Brandon Grotesque",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "-0.16px",
            }}
          >
            We deliver the best and freshest fruit salad in town. Order for a
            combo today!!!
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 90,
          }}
        >
          {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Authentication")}
          /> */}
          <ButtonComponent
            text={"Lets Continue"}
            handlePress={() => navigation.navigate("Authentication")}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

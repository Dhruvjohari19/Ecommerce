import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

import ButtonComponent from "../components/ButtonComponent";
import { Images } from "../Constants/Images";
import Form from "../components/Form";
import { useForm, Controller } from "react-hook-form";

const Authentication = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data, "kk"); // Log the data for testing
    navigation.navigate("Profile", { userData: data });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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
          source={Images.authenticScreen}
        />
      </View>

      <View>
        <View style={{ marginTop: 100, alignItems: "center" }}>
          <Form
            placeholder={"Name"}
            control={control}
            name={"firstName"}
            callSubmit={onSubmit}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 90,
          }}
        >
          <ButtonComponent
            text={"Start Orderning"}
            handlePress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({});

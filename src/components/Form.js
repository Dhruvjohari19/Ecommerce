import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

import { useForm, Controller } from "react-hook-form";

const Form = ({ placeholder, name, callSubmit, control }) => {
  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
    },
  });
  const onSubmit = (data) => callSubmit(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            maxLength={10}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{
              borderRadius: 10,
              backgroundColor: "#F3F1F1",
              width: 327,
              height: 56,
            }}
          />
        )}
        name={name}
      />
      {errors.firstName && <Text>This is required.</Text>}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});

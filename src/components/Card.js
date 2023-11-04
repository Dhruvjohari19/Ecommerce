import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Images } from '../Constants/Images'

const Card = () => {
  return (
    <View style={styles.card}>
    <View
      style={{
        alignItems: "flex-end",
        justifyContent: "flex-end",
        margin: 16,
      }}
    >
      <Image source={Images.heart} />
    </View>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image source={Images.Fruit} />
      <Text
        style={{
          color: "#27214D",
          fontFamily: "Brandon Grotesque",
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          letterSpacing: "-0.16px",
        }}
      >
        Honey Lime Comb
      </Text>
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Text
        style={{
          color: "#F08626",
          fontFamily: "Brandon Grotesque",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          letterSpacing: "-0.14px",
        }}
      >
        2,000
      </Text>
      <Image source={Images.plus} />
    </View>
  </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        backgroundColor: "#FFF",
        elevation: 5, 
        shadowColor: "#202020", 
        shadowOffset: { width: 0, height: 30 }, 
        shadowOpacity: 0.05, 
        shadowRadius: 60, 
        width: 152,
        height: 183,
      },
})
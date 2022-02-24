import React from "react"
import { Text, View, StyleSheet } from "@react-pdf/renderer"

const stylesModule = StyleSheet.create({
  skillRatedContainer: {
    flex: 1,
    flexDirection: "row",
  },
  skillRatedLeftCol: {
    width: 120,
    height: 100,
  },
  skillRatedRightCol: {
    width: 60,
    height: 100,
    alignItems: "flex-start",
    justifySelf: "flex-start",
  },
})

const Stars = props => {
  const star = "⭐"
  let stars = []
  for (let x = 0; x < props.repeats; x++) {
    stars.push(star)
  }
  return (<Text>{stars.join(" ")}</Text>)
}

export default props => (
  <View style={stylesModule.skillRatedContainer}>
    <View style={stylesModule.skillRatedLeftCol}>
      <Text>{props.name}</Text>
    </View>
    <View style={stylesModule.skillRatedRightCol}>
      <Stars repeats={props.level}></Stars>
    </View>
  </View>
)

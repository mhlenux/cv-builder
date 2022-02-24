import React from "react"
import styles from "../../styles"

import { Text, Image, View, StyleSheet } from "@react-pdf/renderer"

const container = {
  alignItems: "center"
}

const stylesModule = StyleSheet.create({
  container: Object.assign(container, styles.marginBottomBig),
  name: {
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: "semibold",
    textDecoration: "none",
    fontFamily: "Poppins",
  },
  label: {
    letterSpacing: 2,
    fontSize: 11,
    fontWeight: "semibold",
    textDecoration: "none",
    fontFamily: "Poppins",
    textTransform: "uppercase"
  },
  dash: {
    display: "inline-block",
    width: 25,
    height: 2,
    backgroundColor: styles.defaultColor,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: 120,
    marginBottom: 15
  }
})

const namePosition = props => (
  <View style={stylesModule.container}>
    <Image style={stylesModule.image} allowDangerousPaths={true} src={props.image}></Image>
    <Text style={stylesModule.name}>{props.name}</Text>
    <Text style={stylesModule.dash}></Text>
    <Text style={stylesModule.label}>{props.label}</Text>
  </View>
)

export default namePosition

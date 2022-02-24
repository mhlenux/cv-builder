import React from "react"
import styles from "../../styles"
import { Text, View } from "@react-pdf/renderer"

const main = props => {
  return (
    <View style={styles.marginBottomBig}>
      <Text style={styles.titleLarge}>Summary</Text>
      <Text style={styles.details}>{props.summary}</Text>
    </View>
  )
}

export default main

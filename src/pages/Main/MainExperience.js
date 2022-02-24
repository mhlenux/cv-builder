import React from "react"
import styles from "../../styles"
import { Text, View } from "@react-pdf/renderer"

const main = props => {
  return (
    <View style={styles.marginBottomBig}>
      <Text style={styles.titleLarge}>Main Experience</Text>
      {props.mainExperience.map((experience, i) => (
        <View key={i} style={styles.marginBottomMedium}>
          <Text style={styles.titleSmall}>{experience.title}</Text>
          <Text>{experience.text}</Text>
        </View>
      ))}
    </View>
  )
}

export default main

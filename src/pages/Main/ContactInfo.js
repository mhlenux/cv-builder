import React from "react"
import styles from "../../styles"

import { Text, View } from "@react-pdf/renderer"

const contactInfo = props => (
  <View style={styles.marginBottomMedium}>
    <Text style={styles.titleSmall}>Contact Info</Text>
    <Text style={styles.textSmaller}>{props.address}</Text>
    <Text style={styles.textSmaller}>{props.phone}</Text>
    <Text style={styles.textSmaller}>{props.email}</Text>
  </View>
)

export default contactInfo
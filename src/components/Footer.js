import React from "react"
import styles from '../styles';
import { Text } from "@react-pdf/renderer"

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const todaysDate = new Date().toLocaleDateString("en-US", dateOptions)

const Footer = props => {
  return (
  <Text style={styles.footer}>{todaysDate}</Text>
  )
}

export default Footer
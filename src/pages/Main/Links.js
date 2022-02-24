import React from 'react';
import styles from "../../styles"
import { Text, View, Link } from '@react-pdf/renderer';

const linksText = {
  letterSpacing: 1,
  marginBottom: 1
}

const links = props => (
  <View style={styles.marginBottomBig}>
    <Text style={styles.titleSmall}>Links</Text>
    {props.links.map((link, i) => (
      <Link style={linksText} key={i} src={link.url}>{link.name}</Link>
      ))}
  </View>
);

export default links;
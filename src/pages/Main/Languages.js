import React from 'react';
import styles from "../../styles"
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import SkillRated from "../../components/SkillRated"

const stylesModule = StyleSheet.create({
  container: {
    height: 60,
  },
})

const languages = props => (
  <View style={styles.marginBottomMedium}>
    <Text style={styles.titleSmall}>Languages</Text>

    <View style={stylesModule.container}>
      {props.languages.map((l, i) => (
        <SkillRated key={i} name={l.language} level={l.level} />
      ))}
    </View>

  </View>
);

export default languages

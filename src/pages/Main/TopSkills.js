import React from "react"
import styles from "../../styles"
import { Text, View } from "@react-pdf/renderer"
import SkillRated from "../../components/SkillRated"
import { StyleSheet } from "@react-pdf/renderer"

const stylesModule = StyleSheet.create({
  container: {
    height: 130,
  },
})

const topSkills = ({ skills }) => {

  const allSkills = []
  skills.front.forEach(skill => allSkills.push(skill))
  skills.back.forEach(skill => allSkills.push(skill))
  skills.server.forEach(skill => allSkills.push(skill))

  const topSkills = allSkills.filter(skill => skill.featured === true).sort((a, b) => a.level > b.level)

  const skillRows = topSkills.map((skill, i) => (
    <SkillRated key={i} name={skill.name} level={skill.level} />)
  )

  return (
    <View style={Object.assign(styles.marginBottomMedium, {})}>
      <Text style={styles.titleSmall}>Top Skills</Text>
      <View style={stylesModule.container}>
        {skillRows}
      </View>
    </View>
  )
}

export default topSkills

import React, { Fragment } from "react"
import { Text, View, StyleSheet } from "@react-pdf/renderer"
import styles from '../styles';

const tableRowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col0: {
    width: '30%',
  },
  col1: {
    width: '15%',
  },
  col2: {
    width: '15%',
  },
  col3: {
    width: '15%',
  }
});

const TableRow = ({ items }) => {

  const parseYearsText = (yearsUsed) => {
    return yearsUsed === 1 ? `${yearsUsed.toString()} year` : `${yearsUsed.toString()} years`
  }

  const rows = items.map(item =>
    <View style={Object.assign(tableRowStyles.row, styles.textMedium)} key={item.name}>
      <Text style={tableRowStyles.col0}>{item.name}</Text>
      <Text style={tableRowStyles.col1}>{item.level.toString()}</Text>
      <Text style={tableRowStyles.col2}>{parseYearsText(item.yearsUsed)}</Text>
      <Text style={tableRowStyles.col3}>{item.lastYearUsed.toString()}</Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

const TableHeader = () => {

  return (
    <View style={Object.assign(tableRowStyles.row, styles.titleSmall)}>
      <Text style={tableRowStyles.col0}>Skill</Text>
      <Text style={tableRowStyles.col1}>Level 1-5</Text>
      <Text style={tableRowStyles.col2}>Time Used</Text>
      <Text style={tableRowStyles.col3}>Last Used</Text>
    </View>
  )
}

const SkillTable = ({ skills, title }) => {
  return (
    <View style={styles.marginBottomHuge}>
      <Text style={Object.assign(styles.titleLarge, { textDecoration: 'underline' })}>{title}</Text>
      <View>
        <TableHeader />
        <TableRow items={skills} />
      </View>
    </View>
  )
}

const skillsStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const Skills = ({ skills }) => {
  return (
    <View style={skillsStyles.container}>
      <SkillTable skills={skills.front} title={'FRONTEND DEVELOPMENT'} />
      <SkillTable skills={skills.back} title={'BACKEND DEVELOPMENT'} />
      <SkillTable skills={skills.server} title={'SERVER, CLOUD, INFRASTRUCTURE'} />
      <Text>{skills.otherText}</Text>
    </View>
  )
}

export default Skills

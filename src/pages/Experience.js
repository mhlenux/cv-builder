import React from "react"
import List, { Item } from "../components/List"
import { Text, View, StyleSheet } from "@react-pdf/renderer"
import styles from '../styles';

const stylesModule = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: 3,
  },
  leftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  }
})

const ExperienceEntry = ({
  company,
  startDate,
  endDate,
  position,
  summary,
  projects,
}) => {

  const title = `${company} | ${position}`
  return (
    <View style={styles.marginBottomMedium}>
      <View style={stylesModule.headerContainer}>
        <View style={stylesModule.leftColumn}>
          <Text style={styles.textMediumBold}>{title}</Text>
        </View>
        <View style={stylesModule.rightColumn}>
          <Text style={styles.textMediumBold}>{startDate} - {endDate}</Text>
        </View>
      </View>

      <Text>{summary}</Text>

      <List>
        {projects.map((project, i) => (
          <Item key={i}>
            {project}
          </Item>
        ))}
      </List>
    </View>
  )
}

const experience = props => {

  return (
    <View style={stylesModule.container}>
      <Text style={styles.titleLarge}>Experience</Text>
      {props.work.map(
        ({ company, startDate, endDate, position, summary, projects }) => (
          <ExperienceEntry
            company={company}
            startDate={startDate}
            endDate={endDate}
            key={company + position}
            position={position}
            summary={summary}
            projects={projects}
          />
        )
      )}
    </View>
  )
}

export default experience

import React from "react"
// import styles from "../styles"
import { View, StyleSheet } from "@react-pdf/renderer"

import Summary from "./Main/Summary"
import MainExperience from "./Main/MainExperience"
import ContactInfo from "./Main/ContactInfo"
import Links from "./Main/Links"
import TopSkills from "./Main/TopSkills"
import Languages from "./Main/Languages"
import NamePosition from "./Main/NamePosition"

const stylesModule = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30
  },
  leftColumn: {
    flexDirection: "column",
    paddingRight: 10,
    paddingBottom: 0,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 15,
  },
})

const imagePath = `../input/profile.png`

const MainPage = props => {
  const resumeJson = props.resume
  return (
    <View style={stylesModule.container}>
      <View style={stylesModule.leftColumn}>
        <NamePosition image={imagePath}
          name={resumeJson.basics.name}
          label={resumeJson.basics.label}
        />
        <ContactInfo
          address={resumeJson.basics.address}
          phone={resumeJson.basics.phone}
          email={resumeJson.basics.email}
        />
        <Links links={resumeJson.basics.links} />
        <TopSkills skills={resumeJson.skills} />
        <Languages languages={resumeJson.skills.languages} />
      </View>

      <View style={stylesModule.rightColumn}>
        <Summary summary={resumeJson.basics.summary} />
        <MainExperience mainExperience={resumeJson.basics.mainExperience} />
      </View>
    </View>
  )
}

export default MainPage

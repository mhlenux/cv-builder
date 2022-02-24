import fs from 'fs'
import React from "react"
import ReactPDF, { Document, Page, StyleSheet } from "@react-pdf/renderer"
import Main from "./pages/Main"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import resumeJson from "../input/resume.json"
import styles from "./styles"
import "./fonts/fonts"
import Footer from "./components/Footer"

['../output', '../input'].forEach(d => {
  if (!fs.existsSync(d)){
    fs.mkdirSync(d);
}
})

const pageStyle = {
  padding: 30,
}
const stylesModule = StyleSheet.create({
  page: Object.assign(pageStyle, styles.textMedium),
})

const MainPage = props => (
  <Page {...props} wrap={false} style={stylesModule.page}>
    <Main resume={resumeJson}></Main>
    <Footer />
  </Page>
)

const ExperiencePage = props => (
  <Page {...props} wrap={false} style={stylesModule.page}>
    <Experience work={resumeJson.work} />
    <Footer></Footer>
  </Page>
)

const SkillsPage = props => (
  <Page {...props} wrap={false} style={stylesModule.page}>
    <Skills skills={resumeJson.skills} />
    <Footer></Footer>
  </Page>
)

const Output = () => (
  <Document
    author={resumeJson.name}
    keywords="resume software developer"
    subject={`The Resume of ${resumeJson.name}`}
    title="Resume"
  >
    <MainPage size="A4" />
    <ExperiencePage size="A4" />
    <SkillsPage size="A4" />
  </Document>
)

const outputFileName = `../output/cv.pdf`

ReactPDF.render(<Output />, outputFileName)

console.log(`CV Rendered to ${outputFileName}`)

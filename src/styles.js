import { StyleSheet } from "@react-pdf/renderer"

const defaultColor = "#595959"

const styles = StyleSheet.create({
  defaultColor: defaultColor,
  textLarge: {
    fontFamily: "Poppins",
    fontSize: 12,
    lineHeight: 1.7,
    fontWeight: 400,
    color: defaultColor
  },
  textMedium: {
    fontFamily: "Poppins",
    fontSize: 10,
    lineHeight: 1.7,
    fontWeight: 400,
    color: defaultColor
  },
  textMediumBold: {
    fontFamily: "Poppins",
    fontSize: 10,
    lineHeight: 1.7,
    fontWeight: "medium",
    color: defaultColor
  },
  textSmaller: {
    fontFamily: "Poppins",
    fontSize: 9,
    fontWeight: 400,
    color: defaultColor
  },
  titleSmall: {
    letterSpacing: 0,
    fontSize: 10,
    fontWeight: "medium",
    textDecoration: "none",
    marginBottom: 3,
    fontFamily: "Poppins",
    color: defaultColor
  },
  titleLarge: {
    letterSpacing: 1,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: "medium",
    marginBottom: 5,
    textTransform: "capitalize",
    color: defaultColor
  },
  marginBottomMedium: {
    marginBottom: 15
  },
  marginBottomBig: {
    marginBottom: 30
  },
  marginBottomHuge: {
    marginBottom: 60
  },
  footer: {
    textAlign: 'right',
    fontSize: 9
  },
})

export default styles

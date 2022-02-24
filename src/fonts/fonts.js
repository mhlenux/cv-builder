import { Font } from "@react-pdf/renderer"

Font.register({
    family: "Poppins",
    fontWeight: 'normal',
    src: `${__dirname}/Poppins/Poppins-Regular.ttf`,
  })
  Font.register({
    family: "Poppins",
    fontWeight: 'medium',
    src: `${__dirname}/Poppins/Poppins-Medium.ttf`,
  })
  Font.register({
    family: "Poppins",
    fontWeight: 'semibold',
    src: `${__dirname}/Poppins/Poppins-SemiBold.ttf`,
  })
  Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/',
  });
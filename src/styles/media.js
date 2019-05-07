import { generateMedia } from 'styled-media-query'

const media = generateMedia({
  xlarge: '1360px',
  large: '1024px',
  medium: '768px',
  small: '600px',
  xsmall: '375px',
})

export default media

// https://github.com/morajabi/styled-media-query

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Scrollbars } from 'react-custom-scrollbars'

import theme from '@styles/theme'

import '@styles/fonts.css'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div style={{ fontFamily: theme.fontFamily }}>
      <Normalize />
      <main>
        <Scrollbars universal style={{ height: '100vh' }}>
          {children}
        </Scrollbars>
      </main>
    </div>
  </ThemeProvider>
)

export default Layout

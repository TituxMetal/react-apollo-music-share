import '@fontsource/roboto'
import React from 'react'
import { render } from 'react-dom'

import { Root } from '#root/components/Root'
import { ThemeProvider } from '#root/theme'

render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>,
  document.getElementById('root')
)

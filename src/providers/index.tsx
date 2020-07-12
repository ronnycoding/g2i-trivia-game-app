import React from 'react'
import { BaseNavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@emotion/react'

import theme from 'theme'
import { QuizProvider } from './quiz'

import { SingleChild } from '../types'

export default function Providers({ children }: SingleChild) {
  return (
    <ThemeProvider theme={theme}>
      <QuizProvider>
        <BaseNavigationContainer>{children}</BaseNavigationContainer>
      </QuizProvider>
    </ThemeProvider>
  )
}

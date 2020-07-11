import React from 'react'
import { BaseNavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@emotion/react'

import theme from 'theme'
import useFontLoad from 'hooks/useFontLoad'
import useLoadTranslation from 'hooks/useLoadTranslations'

import LoadedNavigator from './LoadedNavigator'
import LoadingNavigator from './LoadingNavigator'

// const QuizSetupProvider = () => {}


export default function App() {
  const [loadingFonts] = useFontLoad()
  const [loadingTranslations] = useLoadTranslation()

  const loading = loadingFonts || loadingTranslations
  return (
    <ThemeProvider theme={theme}>
      {/* <QuizSetupProvider> */}
      <BaseNavigationContainer>
        {loading ? (
          <LoadingNavigator />
        ) : (
          <LoadedNavigator />
        )}
      </BaseNavigationContainer>
      {/* </QuizSetupProvider> */}
    </ThemeProvider>
  )
}
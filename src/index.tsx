import React from 'react'

import useFontLoad from 'hooks/useFontLoad'
import useLoadTranslation from 'hooks/useLoadTranslations'
import Providers from 'providers'
import { useQuizState } from 'providers/quiz'

import LoadedNavigator from './LoadedNavigator'
import LoadingNavigator from './LoadingNavigator'

function AppLoader() {
  const [loadingFonts] = useFontLoad()
  const [loadingTranslations] = useLoadTranslation()
  const { questions } = useQuizState()

  const loading = loadingFonts || loadingTranslations || !questions.length

  return loading ? <LoadingNavigator /> : <LoadedNavigator />
}

export default function App() {
  return (
    <Providers>
      <AppLoader />
    </Providers>
  )
}

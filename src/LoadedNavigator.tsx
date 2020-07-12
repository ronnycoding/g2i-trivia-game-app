import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from 'screens/Home'
import Quiz from 'screens/Quiz'
import Results from 'screens/Results'

import { useTranslation } from 'react-i18next'

const Stack = createStackNavigator()

const LoadedNavigator = () => {
  const { t } = useTranslation('pages')
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: t('home'),
        }}
      />
      <Stack.Screen
        name="quiz"
        component={Quiz}
        options={{
          title: t('quiz'),
          // @ts-ignore
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="results"
        component={Results}
        options={{
          title: t('results'),
          // @ts-ignore
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  )
}

export default LoadedNavigator

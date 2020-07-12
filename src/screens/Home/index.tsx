import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import CenteredContainer from 'components/CenteredContainer'
import { Layout, StyledTextBold, StyledText } from 'screens/styles'
import { RootStackParamList } from 'screens/types'

import { Container } from './style'

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'home'>

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'home'>

type HomeProps = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const Home = ({ navigation }: HomeProps) => {
  const { t } = useTranslation('home')
  return (
    <CenteredContainer>
      <Layout>
        <Container>
          <StyledTextBold>{t('welcomeMessage')}</StyledTextBold>
          <StyledText>{t('introMessage')}</StyledText>
          <StyledText>{t('challengeMessage')}</StyledText>
          <TouchableOpacity onPress={() => navigation.navigate('quiz')}>
            <StyledText>{t('buttonStartMessage')}</StyledText>
          </TouchableOpacity>
        </Container>
      </Layout>
    </CenteredContainer>
  )
}

export default Home

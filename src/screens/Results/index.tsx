import React from 'react'
import { RouteProp, StackActions } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import CenteredContainer from 'components/CenteredContainer'
import { Layout, StyledTextBold, StyledText } from 'screens/styles'
import { RootStackParamList } from 'screens/types'
import { useQuizState, useQuizDispatch } from 'providers/quiz'
import { TypeQuestion, RESET_QUIZ } from 'providers/quiz/types'

import {
  Container,
  ResultsTitle,
  ResultsListView,
  ItemView,
  ItemText,
  ItemIcon,
  ItemIconContainer,
  ItemTextContainer,
  ResetButton,
} from './style'

type ResultsScreenRouteProp = RouteProp<RootStackParamList, 'results'>

type ResultsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'results'
>

type ResultsProps = {
  route: ResultsScreenRouteProp
  navigation: ResultsScreenNavigationProp
}

const Results = ({ navigation }: ResultsProps) => {
  const { t } = useTranslation('results')
  const { answers, questions } = useQuizState()
  const dispatch = useQuizDispatch()

  // @ts-ignore
  const correctAnwers = answers.reduce((prev, current) => {
    if (typeof prev === 'object') {
      if (prev.is_correct && current.is_correct) {
        return 2
      }
      if (current.is_correct) {
        return 1
      }
      return 0
    }

    return current.is_correct ? prev + 1 : prev
  })

  const handleReset = () => {
    dispatch({ type: RESET_QUIZ })
    navigation.popToTop()
  }

  return (
    <CenteredContainer>
      <Layout>
        <Container>
          <ResultsTitle>{t('scoreMessage')}</ResultsTitle>
          <StyledTextBold>{`${correctAnwers} / ${questions.length}`}</StyledTextBold>
          <ResultsListView
            data={questions}
            // @ts-ignore
            renderItem={({ item }: TypeQuestion) => {
              const { question, id } = item
              return (
                <ItemView>
                  <ItemIconContainer>
                    <ItemIcon>
                      {answers.find(({ id: answerKey }) => answerKey === id)
                        ?.is_correct
                        ? '+'
                        : '-'}
                    </ItemIcon>
                  </ItemIconContainer>
                  <ItemTextContainer>
                    <ItemText>{question}</ItemText>
                  </ItemTextContainer>
                </ItemView>
              )
            }}
            // @ts-ignore
            keyExtractor={(item: TypeQuestion) => `id-${item.id}`}
          />
        </Container>
        <ResetButton onPress={handleReset}>
          <StyledText>{t('resetMessage')}</StyledText>
        </ResetButton>
      </Layout>
    </CenteredContainer>
  )
}

export default Results

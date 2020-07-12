import React, { useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useQuizDispatch, useQuizState } from 'providers/quiz'
import CenteredContainer from 'components/CenteredContainer'
import { Layout, StyledText } from 'screens/styles'
import { RootStackParamList } from 'screens/types'
import { ANSWER } from 'providers/quiz/types'

import {
  Container,
  QuizCategoryTitle,
  QuizQuestionContainer,
  QuizProgressText,
  QuizOptionsContainer,
  QuizOptionButton,
} from './style'

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'quiz'>

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'quiz'>

type QuizProps = {
  route: QuizScreenRouteProp
  navigation: QuizScreenNavigationProp
}

const Quiz = ({ navigation }: QuizProps) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const { questions } = useQuizState()
  const dispatch = useQuizDispatch()

  const { category, question, correct_answer } = questions[questionIndex] || {}

  function handleTrueButton() {
    dispatch({
      type: ANSWER,
      payload: {
        id: questionIndex,
        answer: true,
        is_correct: correct_answer === 'True',
      },
    })

    if (questionIndex === questions.length - 1) {
      navigation.navigate('results')
      return
    }

    setQuestionIndex(questionIndex + 1)
  }

  function handleFalseButton() {
    dispatch({
      type: ANSWER,
      payload: {
        id: questionIndex,
        answer: false,
        is_correct: correct_answer === 'False',
      },
    })
    if (questionIndex === questions.length - 1) {
      navigation.navigate('results')
      return
    }
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <CenteredContainer>
      <Layout>
        <Container>
          <QuizCategoryTitle>{category}</QuizCategoryTitle>
          <QuizQuestionContainer>
            <StyledText>{question}</StyledText>
          </QuizQuestionContainer>
          <QuizProgressText>{`${questionIndex + 1} of ${
            questions.length
          }`}</QuizProgressText>
          <QuizOptionsContainer>
            <QuizOptionButton onPress={handleTrueButton}>
              <StyledText>{'True'}</StyledText>
            </QuizOptionButton>
            <QuizOptionButton onPress={handleFalseButton}>
              <StyledText>{'False'}</StyledText>
            </QuizOptionButton>
          </QuizOptionsContainer>
        </Container>
      </Layout>
    </CenteredContainer>
  )
}

export default Quiz

import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import axios from 'axios'

import { useQuizDispatch } from 'providers/quiz'
import { TypeQuestion, SET_QUIZ } from 'providers/quiz/types'

import { TypeApiResults } from '../../types'

const Entities = require('html-entities').XmlEntities

import CenteredContainer from 'components/CenteredContainer'

export default function Loading() {
  const dispatch = useQuizDispatch()

  const entities = new Entities()

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(({ data }) => {
        const { results }: TypeApiResults = data
        const dataNormalized: TypeQuestion[] = results.map(
          ({ category, question, correct_answer }, i) => ({
            id: i,
            category,
            question: entities.decode(question),
            correct_answer,
          }),
        )

        dispatch({
          type: SET_QUIZ,
          payload: dataNormalized,
        })
      })
  }, [])

  return (
    <CenteredContainer>
      <ActivityIndicator size="large" />
    </CenteredContainer>
  )
}

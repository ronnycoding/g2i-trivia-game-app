import React, { createContext, useContext, useReducer } from 'react'

import {
  TypeQuizInitialState,
  QuizActionTypes,
  ANSWER,
  RESET_QUIZ,
  SET_QUIZ,
} from 'providers/quiz/types'

import { SingleChild } from '../../types'

export const quizInitialState: TypeQuizInitialState = {
  questions: [],
  answers: [],
}

type Dispatch = (action: QuizActionTypes) => void

const QuizStateContext = createContext<TypeQuizInitialState>(quizInitialState)
const QuizDispatchContext = createContext<Dispatch | undefined>(undefined)

function quizReducer(state: TypeQuizInitialState, action: QuizActionTypes) {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        questions: action.payload,
      }
    case ANSWER:
      return { ...state, answers: [...state.answers, action.payload] }
    case RESET_QUIZ:
      return quizInitialState
    default:
      return state
  }
}

function useQuizState() {
  const context = useContext(QuizStateContext)
  if (context === undefined) {
    throw new Error('useQuizState must be used within a QuizProvider')
  }
  return context
}

function useQuizDispatch() {
  const context = useContext(QuizDispatchContext)
  if (context === undefined) {
    throw new Error('useQuizDispatch must be used within a QuizProvider')
  }
  return context
}

function QuizProvider({ children }: SingleChild) {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState)

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}

export { QuizProvider, useQuizState, useQuizDispatch }

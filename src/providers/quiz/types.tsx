export const ANSWER = 'ANSWER'
export const RESET_QUIZ = 'RESET_QUIZ'
export const SET_QUIZ = 'SET_QUIZ'

export interface TypeQuestion {
  id: number
  category: string
  question: string
  correct_answer: string
}

export interface TypeAnswer {
  id: number
  answer: boolean
  is_correct: boolean
}

export interface TypeQuizInitialState {
  questions: TypeQuestion[]
  answers: TypeAnswer[]
}

export interface AnswerAction {
  type: typeof ANSWER
  payload: TypeAnswer
}

export interface ResetQuizAction {
  type: typeof RESET_QUIZ
}

export interface SetQuizAction {
  type: typeof SET_QUIZ
  payload: TypeQuestion[]
}

export type QuizActionTypes = AnswerAction | ResetQuizAction | SetQuizAction

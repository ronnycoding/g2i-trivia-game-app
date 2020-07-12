import { Theme } from 'theme/types'

export type SingleChild = { children: JSX.Element }
export type SingleChildOrString = { children: JSX.Element | string }
export type MoreThanOneChild = { children: JSX.Element[] }
export type OneOrMoreChildren = { children: JSX.Element | JSX.Element[] }
export interface EmotionComponentProps {
  theme?: Theme
}

interface TypeApiQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answer: string[]
}

export interface TypeApiResults {
  response_code: number | undefined
  results: TypeApiQuestion[]
}

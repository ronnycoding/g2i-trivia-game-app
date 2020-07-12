import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

export const Container = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: 40,
  paddingLeft: 40,
  paddingBottom: 20,
  paddingTop: 10,
}))

import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

export const Container = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 20,
}))

export const QuizCategoryTitle = styled.Text<EmotionComponentProps>({}, () => ({
  textAlign: 'center',
  fontSize: 16,
  fontFamily: 'Montserrat-Bold',
}))

export const QuizProgressText = styled.Text<EmotionComponentProps>({}, () => ({
  textAlign: 'center',
  fontSize: 18,
  marginTop: 20,
}))

export const QuizQuestionContainer = styled.View<EmotionComponentProps>(
  {},
  () => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    padding: 24,
    marginTop: 100,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    borderRightColor: '#000000',
    borderRightWidth: 2,
    borderTopColor: '#000000',
    borderTopWidth: 2,
    borderLeftColor: '#000000',
    borderLeftWidth: 2,
  }),
)

export const QuizOptionsContainer = styled.View<EmotionComponentProps>(
  {},
  () => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
  }),
)

export const QuizOptionButton = styled.TouchableOpacity<EmotionComponentProps>(
  {},
  () => ({
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    borderTopColor: '#000000',
    borderTopWidth: 2,
    borderRightColor: '#000000',
    borderRightWidth: 2,
    borderLeftColor: '#000000',
    borderLeftWidth: 2,
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 10,
  }),
)

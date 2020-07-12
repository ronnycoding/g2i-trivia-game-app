import styled from '@emotion/native'
import TextBold from 'components/TextBold'
import { Text } from 'react-native'
import { EmotionComponentProps } from 'types'

export const Layout = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}))

export const StyledTextBold = styled(TextBold)<EmotionComponentProps>(
  {},
  () => ({
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  }),
)

export const StyledText = styled(Text)<EmotionComponentProps>({}, () => ({
  textAlign: 'center',
  fontSize: 20,
}))

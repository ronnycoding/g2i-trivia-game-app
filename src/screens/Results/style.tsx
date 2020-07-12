import styled from '@emotion/native'
import { EmotionComponentProps } from 'types'

export const Container = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flex: 1,
}))

export const ResultsTitle = styled.Text<EmotionComponentProps>({}, () => ({
  textAlign: 'center',
  fontSize: 18,
  marginTop: 10,
  fontFamily: 'Montserrat-Bold',
}))

export const ResultsListView = styled.FlatList<EmotionComponentProps>(
  {},
  () => ({
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  }),
)

export const ItemView = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
}))

export const ItemText = styled.Text<EmotionComponentProps>({}, () => ({
  fontSize: 18,
  color: '#808080',
}))

export const ItemIcon = styled.Text<EmotionComponentProps>({}, () => ({
  fontSize: 28,
  color: '#808080',
  fontFamily: 'Montserrat-Bold',
}))

export const ItemIconContainer = styled.View<EmotionComponentProps>({}, () => ({
  width: 30,
  display: 'flex',
}))

export const ItemTextContainer = styled.View<EmotionComponentProps>({}, () => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 5,
  maxWidth: '90%',
}))

export const ResetButton = styled.TouchableOpacity<EmotionComponentProps>(
  {},
  () => ({
    padding: 20,
  }),
)

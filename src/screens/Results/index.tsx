import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'

import CenteredContainer from 'components/CenteredContainer'

export default function Results() {
  const { t } = useTranslation('results')
  return (
    <CenteredContainer>
      <Text>{t('scoreMessage')}</Text>
    </CenteredContainer>
  )
}
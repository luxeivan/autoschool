import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'

export default function Quadro() {
  return (
    <div>
      <Helmet>
        <meta name="description" content={'Квадроциклы и спецтехника'} />
        <title>{'Квадроциклы и спецтехника'}</title>
      </Helmet>
      <PageTitle title={'Квадроциклы и спецтехника'} />
      <p>
      Учебный центр «Арсенал» проводит набор учебных групп по следующим профессиям.
      </p>
    </div>
  )
}

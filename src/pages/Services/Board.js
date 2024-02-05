import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'

export default function Board() {
  return (
    <div>
      <Helmet>
        <meta name="description" content={'Судовождение'} />
        <title>{'Судовождение'}</title>
      </Helmet>
      <PageTitle title={'Судовождение'} />
      <p>
      Учебный центр «Арсенал» проводит набор в группы обучения судовождению.
      </p>
    </div>
  )
}

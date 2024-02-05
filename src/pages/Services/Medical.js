import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'

export default function Medical() {
  return (
    <div>
      <Helmet>
        <meta name="description" content={'Медицинская комиссия'} />
        <title>{'Медицинская комиссия'}</title>
      </Helmet>
      <PageTitle title={'Медицинская комиссия'} />
      <p>
        Медкомиссия проводится организованно в помещении автошколы.
        Оплата со скидкой предоставляется медицинским учреждением.
      </p>
    </div>
  )
}

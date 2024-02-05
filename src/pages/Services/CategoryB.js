import { Typography } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'

export default function CategoryB() {
  return (
    <div>
      <Helmet>
        <meta name="description" content={'Обучение на категорию «В»'} />
        <title>{'Обучение на категорию «В»'}</title>
      </Helmet>
      <PageTitle title={'Обучение на категорию «В»'} />
      
      <p>
        Стоимость курса теоретических занятий на весь период обучения по категории «В» — <span style={{color:"green",fontWeight:600}}>от 11 000 рублей</span>. «МалинАвто» предоставляет возможность поэтапной оплаты по схеме <span style={{color:"green",fontWeight:600}}>50%+ 50%</span>. Курс обучения по категории «В» рассчитан на 2,5 месяца. Учитывая занятость наших курсантов, занятия по теоретической части мы проводим по будням, <span style={{color:"green",fontWeight:600}}>вечером (с 18:30 до 20:30)</span>, а также имеются группы <span style={{color:"green",fontWeight:600}}>выходного дня
        (с 10:00 до 12:00 и с 12:30 до 14:30)</span> . Время для практических занятий согласовывается отдельно в индивидуальном порядке.

        Стоимость практических занятий <span style={{color:"green",fontWeight:600}}>1100 рублей</span> (длительность 1,5 часа). Практические занятия проходят в удобное для Вас время.
      </p>
    </div>
  )
}

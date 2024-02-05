import React, { useEffect, useState } from 'react'
import { Collapse } from 'antd';
import conf from '../../config'
import axios from 'axios'
import { Helmet } from "react-helmet";
import PageTitle from '../../components/another/PageTitle';
import MainAbout from '../../components/MainAbout';
import Structure from '../../components/Structure';

import css from './Info.css'

const arrinfo = [
  {
    title: 'Основные сведения',
    content: <MainAbout />
  },
  {
    title: 'Международное сотрудничество',
    content: <p>У образовательной организации отсутствуют договоры с иностранными и международными организациями по вопросам образования и науки. Образовательные программы имеющие международную аккредитацию отсутствуют.</p>
  },
  {
    title: 'Доступная среда',
    content: <p>Образовательная организация расположена по адресу г. Зеленоград, ул. Панфилова, д. 28Б на 2 этаже. При входе в здание имеются дверные проемы, оборудованные автоматическими дверями соответствующими всем требованиям. Для подъема на 2 этаж имеется лифт.</p>
  },
  {
    title: 'Структура и органы управления образовательной организацией',
    content: <Structure />
  },
  {
    title: 'Доступ к информационным системам',
    content: <p>Обеспечен доступ к информационным системам, информационно-телекоммуникационным сетям и электронным образовательным ресурсам.</p>
  },
  {
    title: 'Стипендии и иные виды материальной поддержки',
    content: <p>Стипендии и другие виды материальной поддержки не предусмотрены.</p>
  },
  {
    title: 'Вакантные места для приема (перевода)',
    content: <p>Вакантных мест для приема (перевода) нет.</p>
  },

]

export default function Info() {
  const [docs, setDocs] = useState([])
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/informacziya?populate[0]=meta`)
      .then(res => {
        //console.log(res.data.data.attributes)
        //setDocs(res.data.data.attributes.docs)
        setMeta(res.data.data.attributes.meta)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <Helmet>
        <meta name="description" content={meta.description} />
        <title>{meta.title}</title>
      </Helmet>
      <div>
        <PageTitle title={meta.title} />
        <p>
          АНО ДПО Автошкола «МалинАвто» -  современный специализированный центр в г. Зеленограде, где любой начинающий водитель может рассчитывать на индивидуальный подход и качественное индивидуальное решение!
        </p>
        <p>
          Одно из самых главных наших отличий и достоинств – коллектив преподавателей. Опытные инструкторы со стажем  не менее 20 лет, отлично разбирающиеся в психологии «начинающего водителя», помогут Вам приобрести не только необходимые навыки и знания, а также сделают обучение в автошколе не скучным и познавательным.
        </p>
        <Collapse accordion items={arrinfo.map((info, index) => (
          {
            key: index,
            label: info.title,
            children: info.content,
          }
        )
        )} />

        {/* <Typography.Title level={4} className='info-title'>Основные сведения</Typography.Title>
        <MainAbout /> */}

        {/* <Typography.Title level={4} className='info-title'>Международное сотрудничество</Typography.Title>
        <p>
          У образовательной организации отсутствуют договоры с иностранными и международными организациями по вопросам образования и науки. Образовательные программы имеющие международную аккредитацию отсутствуют.
        </p> */}

        {/* <Typography.Title level={4} className='info-title'>Доступная среда</Typography.Title>
        <p>
          Образовательная организация расположена по адресу г. Зеленоград, ул. Панфилова, д. 28Б на 2 этаже. При входе в здание имеются дверные проемы, оборудованные автоматическими дверями соответствующими всем требованиям. Для подъема на 2 этаж имеется лифт.
        </p> */}

        {/* <Typography.Title level={4} className='info-title'>Структура и органы управления образовательной организацией</Typography.Title>
        <Structure /> */}

        {/* <Typography.Title level={4} className='info-title'>Доступ к информационным системам</Typography.Title>
        <p>
          Обеспечен доступ к информационным системам, информационно-телекоммуникационным сетям и электронным образовательным ресурсам.
        </p> */}

        {/* <Typography.Title level={4} className='info-title'>Стипендии и иные виды материальной поддержки</Typography.Title>
        <p>
          Стипендии и другие виды материальной поддержки не предусмотрены.
        </p> */}

        {/* <Typography.Title level={4} className='info-title'>Вакантные места для приема (перевода)</Typography.Title>
        <p>
          Вакантных мест для приема (перевода) нет.
        </p> */}

      </div>
    </>
  )
}

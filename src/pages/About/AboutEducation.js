import { Descriptions, List, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import conf from '../../config'
import axios from 'axios'
import File from '../../components/another/File'
const items = [
  {
    key: '1',
    label: 'Уровень образования',
    children: 'Профессиональное обучение',
  },
  {
    key: '2',
    label: 'Код профессии',
    children: '11442 (кроме категорий «А», «А1», «М» — 11441)',
  },
  {
    key: '3',
    label: 'Как производится обучение',
    children: 'Обучение производится по договорам об оказании платных образовательных услуг за счет средств физических лиц',
  },
  {
    key: '4',
    label: 'Форма обучения',
    children: 'Очная',
  },
  {
    key: '5',
    label: 'Реализуемые уровни образования',
    children: 'Профессиональное обучение',
  },
  {
    key: '6',
    label: 'Язык преподавания',
    children: 'Русский',
  },
  {
    key: '7',
    label: 'Реализуемые программы профессиональной подготовки водителей транспортных средств',
    children: <List>
      <List.Item>
        Категория «B»
      </List.Item>
      <List.Item>
        Категория «A»
      </List.Item>
      <List.Item>
        Категория «B(AT)»
      </List.Item>
    </List>,
  },
  {
    key: '8',
    label: 'Методы обучения',
    children: 'При обучении могут использоваться методы электронного обучения и дистанционных образовательных технологий',
  },
]
const items2 = [
  {
    key: '1',
    label: 'Численность обучающихся по договорам об образовании за счет средств физических лиц',
    children: '646 человек',
  },
  {
    key: '2',
    label: 'Численность обучающихся по договорам об образовании за счет средств юридических лиц',
    children: '0 человек',
  },
  {
    key: '3',
    label: 'Численность обучающихся по договорам об образовании за счет средств бюджетных ассигнований бюджетов федерального уровня, субъектов РФ и местного уровня',
    children: '0 человек',
  },
  {
    key: '4',
    label: 'Численность обучающихся иностранных граждан',
    children: '0 человек',
  },
  {
    key: '5',
    label: 'Численность обучающихся по реализуемым образовательным программам',
    children: <List>
      <List.Item>
        Подготовка водителей ТС категории «А» — 117 человек
      </List.Item>
      <List.Item>
        Подготовка водителей ТС категории «В» — 529 человек
      </List.Item>
    </List>,
  },
]
const catA = [
  {
    key: '1',
    label: 'Наименование профессии',
    children: 'Водитель ТС категории "А"',
  },
  {
    key: '2',
    label: 'Нормативный срок обучения',
    children: '2 месяца',
  },
  {
    key: '3',
    label: 'Код профессии',
    children: '11453',
  },
]
const catB = [
  {
    key: '1',
    label: 'Наименование профессии',
    children: 'Водитель ТС категории "В"',
  },
  {
    key: '2',
    label: 'Нормативный срок обучения',
    children: '3 месяца',
  },
  {
    key: '3',
    label: 'Код профессии',
    children: '11442',
  },
]
export default function AboutEducation() {
  let mobile = false
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true
  }
  const [docs, setDocs] = useState([])
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/obrazovanie?populate=*`)
      .then(res => {
        console.log(res.data.data.attributes)
        setDocs(res.data.data.attributes.docs.data)
        setMeta(res.data.data.attributes.meta)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>

      <Helmet>
        <meta name="description" content="Образование автошколы «МалинАвто»" />
        <title>{meta.title}</title>
      </Helmet>
      <div>
        <PageTitle title={'Образование'} />
        <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items} />

        <Typography.Title level={4} className='info-title'>Уровень образования</Typography.Title>
        <List>
          <List.Item>
            Профессиональная подготовка
          </List.Item>
        </List>
        <Typography.Title level={4} className='info-title'>Форма обучения</Typography.Title>
        <List>
          <List.Item>
            Очная
          </List.Item>
          <List.Item>
            Дистанционная
          </List.Item>
        </List>
        <Typography.Title level={4} className='info-title'>Язык образования</Typography.Title>
        <List>
          <List.Item>
            Русский
          </List.Item>
        </List>
        <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items2} />
        <Typography.Title level={4} className='info-title'>Реализуемые образовательные программы профессиональной подготовки и переподготовки</Typography.Title>
        <Typography.Title level={5} className='info-title'>Водителей ТС категории «А»</Typography.Title>
        <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={catA} />

        <Typography.Title level={5} className='info-title'>Водителей ТС категории «В»</Typography.Title>
        <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={catB} />
        <Typography.Title level={4} className='info-title'>Документы</Typography.Title>
        <List>

          {docs && docs.map((file, index) => (
            <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
          ))}
        </List>
      </div>
    </>
  )
}

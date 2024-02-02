import axios from 'axios'
import React, { useEffect, useState } from 'react'
import conf from '../config'
import { Helmet } from 'react-helmet'
import PageTitle from '../components/another/PageTitle'
import { Avatar, List, Descriptions, Collapse, Divider, Flex, Typography } from 'antd';
import YandexMap from '../components/another/YandexMap'

export default function Contacts() {
  let mobile = false
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    mobile = true
  }
  const [data, setdata] = useState()
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/kontakty?populate[0]=meta&populate[1]=phonegroup`)
      .then(res => {
        console.log(res.data.data.attributes)
        setdata(res.data.data.attributes)
        setMeta(res.data.data.attributes.meta)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div>

      <Helmet>
        <meta name="description" content={meta.description} />
        <title>{meta.title}</title>
      </Helmet>
      <PageTitle title={meta.title} />

      <Descriptions
        style={{ marginBottom: "20px" }}
        // title={<Flex gap={'small'}><Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} /><p>{item.fio}</p></Flex>}
        bordered
        size='small'
        layout={mobile ? "vertical" : "horizontal"}
        column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        contentStyle={{ marginBottom: "5px" }}
        items={[
          {
            key: '1',
            label: 'Адрес',
            children: data && data.address,
          },
          {
            key: '2',
            label: 'Телефон',
            children: <List
              size="small"
              dataSource={data && data.phonegroup}
              renderItem={(item) => <List.Item><a href={`tel:${item.phone}`}>{item.displayPhone}</a></List.Item>}
            />,
          },
          {
            key: '3',
            label: 'Часы работы',
            children: data && data.workTime,
          },
          {
            key: '4',
            label: 'Email',
            children: data && <a href={`mailto:${data.email}`}>{data.email}</a>,
          },
        ]}
      />
      <YandexMap lat={data&&data.latitude || 55} lon={data&&data.longitude || 37} />
    </div>
  )
}

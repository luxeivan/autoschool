import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import axios from 'axios'
import conf from '../../config'
import CustomBlockRender from '../../components/CustomBlockRender'
import { Flex, Image, List, Typography } from 'antd'
import styles from './OurInstructors.module.css'

export default function OurInstructors() {
  const [error, setError] = useState(false)
  const [instructors, setInstructors] = useState(null)
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/nashi-instruktora?populate[0]=meta&populate[1]=instructors&populate[2]=instructors.img`)
      .then(res => {
        //console.log(res.data.data)
        setInstructors(res.data.data.attributes.instructors)
        setMeta(res.data.data.attributes.meta)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
  }, [])
  return (
    <div>
      {error &&
        <h2 style={{ marginTop: "100px", textAlign: "center" }}>Что-то пошло не так! Попробуйте обновить страницу...</h2>
      }
      <Helmet>
        <meta name="description" content={meta.description} />
        <title>{meta.title}</title>
      </Helmet>
      <PageTitle title={meta.title} />
      {instructors &&
        <List
          bordered
          dataSource={instructors}
          renderItem={(item) => (
            <List.Item>
              <Flex gap={20} wrap='wrap'>
                <div className={styles.containerImage}>
                  {(item.img.data && item.img.data.attributes &&
                    <Image width={"100%"} src={`${conf.serverUrl}${item.img.data.attributes.url}`} />) || <Image src={`https://www.newsauto.gr/wp-content/uploads/2018/01/The-Stig-768x512.jpg`} />
                  }
                </div>
                <div>
                  <Typography.Title level={4}>{item.fio}</Typography.Title>
                  <Typography.Paragraph><b>Автомобиль:</b> {item.auto}</Typography.Paragraph>
                  <Typography.Paragraph><b>КПП:</b> {item.typeKpp}</Typography.Paragraph>
                  <Typography.Paragraph><b>Гос. номер:</b> {item.numberAuto}</Typography.Paragraph>
                  <Typography.Paragraph><Typography.Link href={`tel:${item.phone}`}>{item.displayPhone}</Typography.Link></Typography.Paragraph>

                </div>
              </Flex>
            </List.Item>
          )}
        />
      }
    </div>
  )
}

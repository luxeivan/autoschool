import React, { useEffect, useState } from 'react'
import { List, Collapse, Divider } from 'antd';
import conf from '../../config'
import axios from 'axios'
import { Helmet } from "react-helmet";
import File from '../../components/another/File';
import PageTitle from '../../components/another/PageTitle';

export default function Gosuslugi() {
  const [gosuslugi, setGosuslugi] = useState(null)
  const [kvitancii, setKvitancii] = useState(null)
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/gosuslugi-i-kvitanczii?populate[0]=gosuslugi&populate[1]=kvitancii&populate[2]=meta`)
      .then(res => {
        //console.log(res.data.data.attributes)
        setGosuslugi(res.data.data.attributes.gosuslugi)
        setKvitancii(res.data.data.attributes.kvitancii)
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
        <Divider orientation="left">Госуслуги</Divider>
        {gosuslugi &&
          <List
            itemLayout="horizontal"
            dataSource={gosuslugi.data}
            renderItem={(file, index) => (
              <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
            )}
          />
        }
        <Divider orientation="left">Квитанции</Divider>
        {kvitancii &&
          <List
            itemLayout="horizontal"
            dataSource={kvitancii.data}
            renderItem={(file, index) => (
              <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
            )}
          />
        }
      </div >
    </>
  )
}

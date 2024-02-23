import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import axios from 'axios'
import conf from '../../config'
import CustomBlockRender from '../../components/CustomBlockRender'
import { Flex, Image } from 'antd'


export default function Gibdd() {
  const [error, setError] = useState(false)
  const [content, setContent] = useState(null)
  const [image, setImage] = useState([])
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/akkreditacziya-v-gibdd?populate[0]=meta&populate[1]=img`)
      .then(res => {
        //console.log(res.data.data.attributes.img)
        setContent(res.data.data.attributes.content)
        setMeta(res.data.data.attributes.meta)
        setImage(res.data.data.attributes.img)
      })
      .catch(error => {
        setError(true)
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
      {content &&
        <Flex gap={20} wrap="wrap" justify='center' align='center'>
          <Image width={200} src={`${conf.serverUrl}${image.data.attributes.url}`} />
          <div style={{ maxWidth: "800px" }}>
            <CustomBlockRender content={content} />
          </div>
        </Flex>
      }
    </div>
  )
}

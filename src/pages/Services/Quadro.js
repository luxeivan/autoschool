import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import axios from 'axios'
import conf from '../../config'
import CustomBlockRender from '../../components/CustomBlockRender'
import SpecList from '../../components/quadro/SpecList'
import { Divider } from 'antd'


export default function Quadro() {
  const [error, setError] = useState(false)
  const [content, setContent] = useState([])
  const [spec, setSpec] = useState([])
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/kvadroczikly-i-specztehnika?populate[0]=meta&populate[1]=spec&populate[2]=spec.img`)
      .then(res => {
        //console.log(res.data.data)
        setContent(res.data.data.attributes.content)
        setMeta(res.data.data.attributes.meta)
        setSpec(res.data.data.attributes.spec)
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
      <CustomBlockRender content={content}/>
      <Divider/>
      <SpecList list={spec}/>
    </div>
  )
}

import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import axios from 'axios'
import conf from '../../config'
import CustomBlockRender from '../../components/CustomBlockRender'


export default function CategoryA() {
  const [error, setError] = useState(false)
  const [content, setContent] = useState([])
  const [meta, setMeta] = useState({ title: '', description: '' })
  useEffect(() => {
    axios.get(`${conf.serverUrl}/api/obuchenie-na-kategoriyu-a?populate=meta`)
      .then(res => {
        //console.log(res.data.data)
        setContent(res.data.data.attributes.content)
        setMeta(res.data.data.attributes.meta)
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
    </div>
  )
}

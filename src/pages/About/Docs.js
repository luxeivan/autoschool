import React, { useEffect, useState } from 'react'
import { Space, Divider, List, Avatar, Typography,Collapse } from 'antd';
import conf from '../../config'
import axios from 'axios'
import { Helmet } from "react-helmet";
import File from '../../components/another/File';
import PageTitle from '../../components/another/PageTitle';

export default function Docs() {
    const [docs, setDocs] = useState([])
    const [meta, setMeta] = useState({ title: '', description: '' })
    useEffect(() => {
        axios.get(`${conf.serverUrl}/api/doc?populate[0]=docs&populate[1]=docs.file&populate[2]=meta`)
            .then(res => {
                //console.log(res.data.data.attributes)
                setDocs(res.data.data.attributes.docs)
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
                <Collapse accordion items={docs.map((group, index) => (
                    {
                        key: index,
                        label: group.name,
                        children: <List
                            itemLayout="horizontal"
                            dataSource={group.file.data}
                            renderItem={(file, index) => (
                                <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
                            )}
                        />,
                    }
                )
                )} />
                {/* {docs.map((group, index) =>
                    // <Space key={index} direction="vertical" size="middle" style={{ display: 'flex' }}>
                    //     <Typography.Title level={5}>{group.name}</Typography.Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={group.file.data}
                        renderItem={(file, index) => (
                            <File key={index} name={file.attributes.name} url={file.attributes.url} type={file.attributes.ext} size={file.attributes.size} />
                        )}
                    />
                    // </Space>
                )} */}
            </div >
        </>
    )
}

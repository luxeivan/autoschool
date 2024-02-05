import React, { useEffect, useState } from 'react'
import { Avatar,  Descriptions,  Divider, Flex} from 'antd';
import { Helmet } from "react-helmet";
import conf from '../../config'
import axios from 'axios';
import PageTitle from '../../components/another/PageTitle';

export default function Staff() {
    let mobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    }
    const [admin, setAdmin] = useState([])
    const [teacher, setTeacher] = useState([])
    const [meta, setMeta] = useState({ title: '', description: '' })
    useEffect(() => {
        axios.get(`${conf.serverUrl}/api/personal?populate=*`)
            .then(res => {
                //console.log(res.data.data.attributes.teacher)
                setAdmin(res.data.data.attributes.administration)
                setTeacher(res.data.data.attributes.teacher)
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
            <PageTitle title={meta.title} />
            <Divider orientation="left"><strong>Руководство</strong></Divider>
            {admin.map(item => <Descriptions
                key={item.id}
                style={{ marginBottom: "20px" }}
                title={<Flex gap={'small'}><Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} /><p>{item.fio}</p></Flex>}
                bordered
                size='small'
                layout={mobile ? "vertical" : "horizontal"}
                column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                contentStyle={{ marginBottom: "5px" }}
                items={[
                    {
                        key: '1',
                        label: 'Должность',
                        children: item.post,
                    },
                    {
                        key: '2',
                        label: 'Телефон',
                        children: item.phone,
                    },
                    {
                        key: '3',
                        label: 'email',
                        children: item.email,
                    },
                ]} />)}

            <Divider orientation="left"><strong>Педагогический состав</strong></Divider>
            {teacher.map((item, index) => <Descriptions
                key={index}
                style={{ marginBottom: "20px" }}
                title={<Flex gap={'small'}><Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`} /><p>{item.fio}</p></Flex>}
                bordered
                size='small'
                layout={mobile ? "vertical" : "horizontal"}
                column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                contentStyle={{ marginBottom: "5px" }}
                items={[
                    {
                        key: '1',
                        label: 'Должность',
                        children: item.post ? item.post : '-',
                    },
                    {
                        key: '2',
                        label: 'Учебный предмет',
                        children: item.subject ? item.subject : '-',
                    },
                    {
                        key: '3',
                        label: 'Образование',
                        children: item.education ? item.education : '-',
                    },
                    {
                        key: '4',
                        label: 'Удостоверение о повышении квалификации (не реже чем один раз в три года)',
                        children: item.certificate ? item.certificate : '-',
                    },
                    {
                        key: '5',
                        label: 'Стаж работы по специальности',
                        children: item.experience ? item.experience : '-',
                    },
                    {
                        key: '6',
                        label: 'Форма трудового соглашения',
                        children: item.employment ? item.employment : '-',
                    },
                ]} />)}

        </>
    )
}
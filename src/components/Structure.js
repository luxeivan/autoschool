import React from 'react'
import { Descriptions, Avatar, List } from 'antd';
import pdf from './../img/pdf.svg'
import structurepdf from './../files/structure/Структура и органы управления.pdf'

const items = [
    {
        key: '1',
        label: 'Организационно-правовая форма',
        children: 'Автономная некоммерческая организация дополнительного профессионального образования',
    },
    {
        key: '2',
        label: 'Директор',
        children: 'Дранов Анатолий Иванович',
    },
    {
        key: '3',
        label: 'Телефон',
        children: '+7 (499) 710-00-70',
    },
    {
        key: '4',
        label: 'Электронная почта',
        children: 'malinavto@yandex.ru ',
    },
    {
        key: '5',
        label: 'Уровень образования',
        children: 'профессиональное обучение',
    },
    {
        key: '6',
        label: 'Форма обучения',
        children: 'очная',
    },
    {
        key: '7',
        label: 'Нормативный срок обучения',
        children: '2 – 3 месяца, в зависимости от реализуемой программы',
    },
    {
        key: '8',
        label: 'Адрес официального сайта',
        children: 'http://zelenograd-avtoshkola.ru ',
    },
    {
        key: '9',
        label: 'Структурные подразделения',
        children: 'Структурные подразделения отсутствуют',
    },
]
export default function Structure() {
    let mobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    }
    return (
        <div>
            <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items} />
            <div className='margin20px'>

                {/* <Avatar src={pdf} /> */}
                <List itemLayout="horizontal">
                   
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={ pdf} />}
                            title={<a href={structurepdf} target='_blank'>{'Структура и органы управления'}</a>}
                            description={1268 > 1000 ? `${(1268 / 1000).toFixed(1)} MB` : `${(1268).toFixed()} KB`}
                        />
                    </List.Item>
                </List>
                {/* <a href={structurepdf} target='_blank'>Структура и органы управления</a> */}

            </div>
        </div>
    )
}

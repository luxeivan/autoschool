import React from 'react'
import { Descriptions } from 'antd';
const items = [
    {
        key: '1',
        label: 'О дате создания образовательной организации',
        children: '13 октября 2016 г.',
    },
    {
        key: '2',
        label: 'Об учредителе, учредителях образовательной организации',
        children: 'Дранов Анатолий Иванович',
    },
    {
        key: '3',
        label: 'О месте нахождения образовательной организации и ее филиалов (при наличии), режиме, графике работы, контактных телефонах и об адресах электронной почты',
        children: <div>
            <p>г. Москва, г. Зеленоград, улица Панфилова, д.28 Б</p>
            <p>Пн – Пт 9:00 – 19:00</p>
            <p>+7 (499) 710-00-70, +7 (965) 121-70-07</p>
            <p>malinavto@yandex.ru</p>
        </div>,
    },
]
export default function MainAbout() {
    let mobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    }
    return (
        <div>
            <Descriptions title="" bordered size='small' layout={mobile ? "vertical" : "horizontal"} column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} items={items} />
        </div>
    )
}

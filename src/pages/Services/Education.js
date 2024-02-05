import React from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/another/PageTitle'
import { List, Typography } from 'antd'

export default function Education() {
    return (
        <>

            <Helmet>
                <meta name="description" content="Обучение и аттестация мастеров производственного обучения вождению" />
                <title>Обучение и аттестация мастеров</title>
            </Helmet>
            <div>

                <PageTitle title={'Обучение и аттестация мастеров'} />
                <div class="description uni_col uni-text-default uni-100 only">
                    <p>Для обеспечения автомобильных школ квалифицированными кадрами, как и для реализации самостоятельной деятельности профессионалов, предлагаем услуги по проведению аттестации, повышению квалификации мастеров производственного обучения, преподавателей, председателей экзаменационных комиссий.</p>


                    <Typography.Title level={4} className='info-title'>1. Проведение аттестации мастеров производственного обучения вождению</Typography.Title>
                    <p>
                        По окончании обучения проводится итоговая аттестация с выдачей документов. Стоимость обучения – 6000 руб.
                    </p>
                    <Typography.Title level={4} className='info-title'>2. Подготовка мастеров производственного обучения вождению</Typography.Title>
                    <p>
                        По окончании обучения проводится итоговая аттестация с выдачей документов.
                        Стоимость обучения – 4500 руб.
                    </p>
                    <Typography.Title level={4} className='info-title'>3. Повышение квалификации мастеров производственного обучения вождению</Typography.Title>
                    <p>
                        По окончании обучения проводится итоговая аттестация с выдачей документов.
                        Стоимость обучения – 3000 руб.
                    </p>
                    <Typography.Title level={4} className='info-title'>4. Повышение квалификации преподавателей образовательных учреждений осуществляющих подготовку и переподготовку водителей</Typography.Title>
                    <p>
                        По окончании обучения проводится итоговая аттестация с выдачей документов.
                        Стоимость обучения – 4500 руб.
                    </p>
                    <Typography.Title level={4} className='info-title'>5. Подготовка и повышение квалификации председателей экзаменационных комиссий осуществляющих прием внутренних экзаменов</Typography.Title>
                    <p>
                        Стоимость обучения – 3000 руб.
                    </p>

                    <Typography.Title level={4} className='info-title'>Необходимые документы для записи на курсы:</Typography.Title>

                    <List>
                        <List.Item>Ксерокопия паспорта;</List.Item>
                        <List.Item>
                            Ксерокопия водительского удостоверения (непрерывный стаж по категории, на которую будет проходить обучение - 3 года);</List.Item>
                        <List.Item>
                            Документы об образованию;</List.Item>
                        <List.Item>
                            Медицинская справка о допуске к управлению ТС;</List.Item>
                        <List.Item>
                            2 фото 3х4 см на матовой бумаге;</List.Item>
                        <List.Item>
                            Удостоверение мастера производственного обучения вождению (оригинал);</List.Item>
                        <List.Item>
                            Иные необходимые документы необходимые для записи на курсы.</List.Item>
                    </List>

                    <Typography.Title level={3} className='info-title'>Запись по телефону: <a href='tel:+79654045257' style={{display:"inline-block"}}>+7 (965) 404-52-57</a></Typography.Title>

                </div>
            </div>
        </>
    )
}

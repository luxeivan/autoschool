import React from 'react';
import { Avatar, Flex, Image, List, Typography } from 'antd';
import conf from '../../config';

export default function SpecList({ list }) {
       
    return (
        <List
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item, index) => (
                <List.Item key={index} >
                    <Flex>
                        <div style={{marginRight:"10px",maxWidth:"30%"}} >
                        <Image src={`${conf.serverUrl}${item.img.data.attributes.url}`}/>
                        </div>
                        <div >
                            <Typography.Title level={4}>{item.name}</Typography.Title>
                            <Typography.Paragraph style={{fontWeight:700}}>Стоимость обучения:</Typography.Paragraph>
                            <Typography.Paragraph>Теория – {item.priceTheory} рублей</Typography.Paragraph>
                            <Typography.Paragraph>Практика – {item.pricePractice} рублей</Typography.Paragraph>
                        </div>
                    </Flex>
                </List.Item>
            )}
        />
    );
}
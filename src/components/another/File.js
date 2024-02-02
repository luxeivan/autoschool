import React from 'react'
import {  List, Avatar } from 'antd';
import conf from '../../config'
import pdf from '../../img/pdf.svg'
import jpg from '../../img/jpg.svg'

export default function File({ name, url, type, size }) {
    return (
        <List.Item>            
            <List.Item.Meta
                avatar={<Avatar src={type === '.jpeg' || type === '.jpg' ? jpg : pdf} />}
                title={<a href={conf.serverUrl + url} target='_blank'>{name}</a>}
                description={size > 1000 ? `${(size / 1000).toFixed(1)} MB` : `${(size).toFixed()} KB`}
            />
        </List.Item>
    )
}

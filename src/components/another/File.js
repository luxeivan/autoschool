import React from 'react'
import { List, Avatar } from 'antd';
import conf from '../../config'
import pdf from '../../img/pdf.svg'
import jpg from '../../img/jpg.svg'
import docx from '../../img/docx.svg'
import xlsx from '../../img/xlsx.svg'
import anotherIco from '../../img/anotherIco.svg'

export default function File({ name, url, type, size }) {
    let ico = anotherIco
    if (type === '.jpg' || type === '.jpeg') ico = jpg
    if (type === '.docx' || type === '.doc') ico = docx
    if (type === '.xlsx' || type === '.xls') ico = xlsx
    if (type === '.pdf') ico = pdf
    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar size={48} src={ico} />}
                title={<a href={conf.serverUrl + url} target='_blank'>{name}</a>}
                description={size > 1000 ? `${(size / 1000).toFixed(1)} MB` : `${(size).toFixed()} KB`}
            />
        </List.Item>
    )
}

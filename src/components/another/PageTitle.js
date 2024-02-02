import { Typography } from 'antd'
import React from 'react'

export default function PageTitle({title}) {
  return (
    
    <Typography.Title level={1} style={{ textAlign: "center", fontSize: "1.5rem" }}>{title}</Typography.Title>
  )
}

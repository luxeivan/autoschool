import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  const navigator = useNavigate()
  const handlerBack = () => {
    navigator('/')
  }
  return (

    <Result
      status="404"
      title="404"
      subTitle="Такой страницы не существует"
      extra={<Button onClick={handlerBack} type="primary">На главную</Button>}
    />

  )
}

import React from 'react'
import { theme } from 'antd';



export default function Container({ children }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div style={{
            minHeight: 280,
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
            borderRadius: borderRadiusLG,
        }}>{children}</div>
    )
}

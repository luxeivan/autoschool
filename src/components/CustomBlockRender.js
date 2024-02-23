import React from 'react'
import { Image, List, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'


export default function CustomBlockRender({ content }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{

        list: (tratata) => {
          const newArr = tratata.children.map(item => item.props.content.children[0].text)
          //console.log(tratata.children.map(item=>item.props.content.children[0].text))
          return <List>{newArr.map((item, index) => <List.Item key={index}>{item}</List.Item>)}</List>
        },
        // You can use the default components to set class names...
        paragraph: ({ children }) => <Typography.Paragraph>{children}</Typography.Paragraph>,
        // ...or point to a design system
        heading: ({ children, level }) => <Typography.Title className='info-title' level={level}>{children}</Typography.Title>,
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <Link to={url}>{children}</Link>,
        image: ( {image} ) => {
          console.log(image)
          return <Image preview={false} src={image.url} />
        }
      }}
      modifiers={{

        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  )
}

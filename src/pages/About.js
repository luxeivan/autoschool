import React from 'react'
import { Helmet } from "react-helmet";
import { Collapse,Card } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import info from "../img/info.jpg";
import docs from "../img/docs.jpg";
import aboutEducation from "../img/about-education.jpg";
import staff from "../img/staff.jpg";

const cards = [
  {
    id: 1,
    name: "Информация",
    url: "/about/info",
    description: "Обучение на категорию «В»",
    image: info,
  },
  {
    id: 2,
    name: "Документы",
    url: "/about/docs",
    description: "Обучение на категорию «В(АТ)»",
    image: docs,
  },
  {
    id: 3,
    name: "Образование",
    url: "/about/education",
    description: "Обучение на категорию «А»",
    image: aboutEducation,
  },
  {
    id: 4,
    name: "Сотрудники",
    url: "/about/staff",
    description: "Медицинская комиссия",
    image: staff,
  },
 
];
export default function About() {
  return (
    <div className="services">
      <Helmet>
        <meta name="description" content="Услуги автошколы «МалинАвто»" />
        <title>МалинАвто: Услуги</title>
      </Helmet>
      {cards.map((item) => (
        <Link className="services__item" to={item.url}>
          <Card
            className="services__card"
            title={item.name}
            bordered={false}
            bodyStyle={{ minHeight: "250px", backgroundImage: `url(${item.image})`, backgroundBlendMode: "multiply", backgroundPosition: "bottom right", backgroundSize: "400px", backgroundRepeat: "no-repeat" }}
          >
            {/* <p>{item.description}</p> */}
          </Card>
        </Link>
      ))}
    </div>
  );
}

import { Card } from "antd";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import css from "./Services.css";
import categoryB from "../img/categoryB.jpg";
import categoryBAT from "../img/categoryBAT.jpg";
import categoryA from "../img/categoryA.jpg";
import medcom from "../img/medcom.jpg";
import qvadro from "../img/qvadro.jpg";
import board from "../img/board.jpg";
import education from "../img/education.jpg";
import { Helmet } from "react-helmet";

const cards = [
  {
    id: 1,
    name: "Аккредитация в ГИБДД",
    url: "/advanced/gibdd",
    description: "Аккредитация в ГИБДД",
    image: categoryB,
  },
  {
    id: 2,
    name: "Наши инструктора",
    url: "/advanced/our-instructors",
    description: "Наши инструктора",
    image: categoryBAT,
  },
  {
    id: 3,
    name: "Дополнительные занятия",
    url: "/advanced/additional-classes",
    description: "Дополнительные занятия",
    image: categoryA,
  },
  {
    id: 4,
    name: "Госуслуги и квитанция",
    url: "/advanced/gosuslugi",
    description: "Госуслуги и квитанция на оплату",
    image: medcom,
  },
];

export default function Advanced() {
  return (
    <div className="services">
      <Helmet>
        <meta name="description" content="Услуги автошколы «МалинАвто»" />
        <title>Наши услуги</title>
      </Helmet>
      {cards.map((item) => (
        <Link className="services__item" to={item.url} key={item.id}>
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

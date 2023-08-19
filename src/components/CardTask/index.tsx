import React from "react";
import { Task } from "../../interfaces/tasks";
import { Link } from "react-router-dom";

import { Card, ContainerImage, CardImage, CardInfos, HeaderInfos, CardTitle, TaskValue, CardDescription } from "./styles";

import { Pill } from "../Pill";

import { MoneyFormatter } from "../../utils/dataFormatter";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CardTask: React.FC<Task> = ({ id, image, name, description, value, category_task, created_by }) => {
  return (
    <Link to={`/task/${id}`} style={{ textDecoration: "none" }}>
      <Card>
        <ContainerImage>
          <Pill text={category_task} />
          <CardImage src={image} alt="Imagem da tarefa" />
        </ContainerImage>
        <CardInfos>
          <HeaderInfos>
            <CardTitle>{name}</CardTitle>
            <TaskValue>{MoneyFormatter(Number(value))}</TaskValue>
          </HeaderInfos>
          <CardDescription>{description}</CardDescription>
        </CardInfos>
      </Card>
    </Link>
  );
};

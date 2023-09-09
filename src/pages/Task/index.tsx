import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { Container, ContainerImage, Image, ContainerInfos, ContainerTitleValue, Title, Value, Description, ButtonExecute } from "./styles";

import { Pill } from "../../components/Pill";

import { readOneTask } from "../../services/task";
import { readOneCategory } from "../../services/category";

import { Task } from "../../interfaces/tasks";
import { Category } from "../../interfaces/categories";

import { MoneyFormatter } from "../../utils/dataFormatter";

export const TaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: task } = useQuery<Task>(["readOneTask", id], () => readOneTask(id || ""), {
    retry: 5,
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
  });

  const categoryTask = task?.category_task; // Armazena a categoria em uma variável

  const { data: category } = useQuery<Category>(["readOneCategory", categoryTask], () => readOneCategory(categoryTask || ""), {
    retry: 5,
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
  });

  return (
    <Container>
      <ContainerImage>
        <Image src={task?.image} alt="Imagem da tarefa" />
      </ContainerImage>
      <ContainerInfos>
        <Pill text={category?.name} />
        <ContainerTitleValue>
          <Title>{task?.name}</Title>
          <Value>{MoneyFormatter(Number(task?.value))}</Value>
        </ContainerTitleValue>
        <Description>{task?.description}</Description>
        <Link to={`/execution/${id}`} style={{ width: "100%", textDecoration: "none" }}>
          <ButtonExecute>Executar</ButtonExecute>
        </Link>
      </ContainerInfos>
    </Container>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, ContainerImage, Image, ContainerInfos, ContainerTitleValue, Title, Value, Description, ButtonExecute } from "./styles";

import { Pill } from "../../components/Pill";

import { readOneTask } from "../../services/task";
import { readOneCategory } from "../../services/category";

import { Task } from "../../interfaces/tasks";
import { Category } from "../../interfaces/categories";

export const TaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task>();
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    async function handleReadOneTask() {
      if (id) {
        const response = await readOneTask(id);
        setTask(response);
        return response; // Retornar a resposta para ser usada no then
      }
    }

    async function handleReadOneCategory(taskId: string) {
      if (taskId) {
        const response = await readOneCategory(taskId);
        setCategory(response);
      }
    }

    if (id) {
      handleReadOneTask().then((response) => {
        if (response) {
          handleReadOneCategory(response.category_task);
        }
      });
    }
  }, [id]);

  function handleExecute() {
    console.log("Executou");
  }

  return (
    <Container>
      <ContainerImage>
        <Image src={task?.image} alt="Imagem de uma pessoa com um notebook" />
      </ContainerImage>
      <ContainerInfos>
        <Pill text={category?.name} />
        <ContainerTitleValue>
          <Title>{task?.name}</Title>
          <Value>R$ {task?.value}</Value>
        </ContainerTitleValue>
        <Description>{task?.description}</Description>
        <ButtonExecute onClick={handleExecute}>Executar</ButtonExecute>
      </ContainerInfos>
    </Container>
  );
};

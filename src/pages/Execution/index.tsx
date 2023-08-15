import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  ContainerHeader,
  TileExecution,
  TaskExecution,
  DescExecution,
  FormExecution,
  ContainerUploadBefore,
  ContainerTitleUpload,
  TitleUpload,
  ContainerInputUpload,
  PreviewImage,
  LabelUpload,
  InputUpload,
  ContainerUploadAfter,
  ContainerSubmit,
  ButtonSubmit,
} from "./styles";

import { ImageUpload } from "../../utils/imageUpload";

import { createExecution } from "../../services/execution";
import { readOneTask } from "../../services/task";

import { Execution } from "../../interfaces/executions";
import { Task } from "../../interfaces/tasks";

export const ExecutionPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imageBefore, setImageBefore] = useState<File>();
  const [imageAfter, setImageAfter] = useState<File>();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    if (id) {
      readOneTask(id).then((response) => {
        setTask(response);
      });
    }
  }, [id]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!imageBefore || !imageAfter) {
      alert("Preencha todos os campos");
      return;
    }

    const urlBeforePromise = ImageUpload(imageBefore);
    const urlAfterPromise = ImageUpload(imageAfter);

    Promise.all([urlBeforePromise, urlAfterPromise])
      .then((values) => {
        const data: Execution = {
          before_image: values[0],
          after_image: values[1],
          status: "pending",
          task_executed: id ? id : "",
          executed_by: "9316456d-b113-4d99-97c3-57a76d3e1bdf", //change for user id context
        };

        createExecution(data);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  }

  return (
    <Container>
      <ContainerHeader>
        <TileExecution>Executando a terefa</TileExecution>
        <TaskExecution>{task?.name}</TaskExecution>
      </ContainerHeader>
      <FormExecution onSubmit={handleSubmit} encType="multipart/form-data" method="post" id="form">
        <ContainerUploadBefore>
          <ContainerTitleUpload>
            <TitleUpload>Imagem antes</TitleUpload>
            <ContainerInputUpload>
              {imageBefore && <PreviewImage src={URL.createObjectURL(imageBefore)} alt="Imagem antes" />}
              <LabelUpload htmlFor="before">{imageBefore ? "Alterar imagem" : "Adicionar imagem"}</LabelUpload>
              <InputUpload type="file" name="before" id="before" onChange={(event) => setImageBefore(event.target.files![0])} />
            </ContainerInputUpload>
          </ContainerTitleUpload>
        </ContainerUploadBefore>
        <ContainerUploadAfter>
          <ContainerTitleUpload>
            <TitleUpload>Imagem depois</TitleUpload>
            <ContainerInputUpload>
              {imageAfter && <PreviewImage src={URL.createObjectURL(imageAfter)} alt="Imagem depois" />}
              <LabelUpload htmlFor="after">{imageAfter ? "Alterar imagem" : "Adicionar imagem"}</LabelUpload>
              <InputUpload type="file" name="after" id="after" onChange={(event) => setImageAfter(event.target.files![0])} />
            </ContainerInputUpload>
          </ContainerTitleUpload>
        </ContainerUploadAfter>
        <ContainerSubmit>
          <ButtonSubmit type="submit">Confirmar</ButtonSubmit>
          <DescExecution>Para a execução ser validada, utilize os campos para adicionar imagens de antes e depois da tarefa ser executada</DescExecution>
        </ContainerSubmit>
      </FormExecution>
    </Container>
  );
};

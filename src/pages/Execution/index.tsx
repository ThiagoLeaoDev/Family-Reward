import React, { FC, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { defaultToastOptions, Toast } from "../../components/Toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

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
  const { user } = useContext(AuthContext);
  const [imageBefore, setImageBefore] = useState<File>();
  const [imageAfter, setImageAfter] = useState<File>();
  const [task, setTask] = useState<Task>();
  const createExecutionMutation = useMutation((data: Execution) => createExecution(data));
  const navigate = useNavigate();

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
          task_executed: id || "",
          executed_by: user?.id || "",
        };

        createExecutionMutation.mutate(data);

        toast.success("Execução realizada com sucesso!", {
          ...defaultToastOptions,
        });
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });

    navigate("/profile");
  }

  return (
    <Container>
      <Toast />
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

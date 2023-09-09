import React, { FC, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { defaultToastOptions, Toast } from "../../components/Toast";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  ContainerUploadAfter,
  ContainerSubmit,
  ButtonSubmit,
} from "./styles";

import { Form } from "../../components/Form";

import { ImageUpload } from "../../utils/imageUpload";

import { createExecution } from "../../services/execution";
import { readOneTask } from "../../services/task";

import { Execution } from "../../interfaces/executions";
import { Task } from "../../interfaces/tasks";

const createExecutionFormSchema = z.object({
  before: z.instanceof(FileList).transform((list) => list.item(0)!),
  after: z.instanceof(FileList).transform((list) => list.item(0)!),
});

type CreateExecutionFormData = z.infer<typeof createExecutionFormSchema>;

export const ExecutionPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(AuthContext);
  const [imageBefore, setImageBefore] = useState<File>();
  const [imageAfter, setImageAfter] = useState<File>();

  const { data } = useQuery<Task>("readOneTask", () => readOneTask(id || ""), {
    retry: 5,
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
  });

  const createExecutionForm = useForm<CreateExecutionFormData>({
    resolver: zodResolver(createExecutionFormSchema),
  });

  const createExecutionMutation = useMutation((data: Execution) => createExecution(data));

  async function createExecutionSubmit(data: CreateExecutionFormData) {
    const urlBeforePromise = ImageUpload(data.before);
    const urlAfterPromise = ImageUpload(data.after);

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

    createExecutionForm.reset();
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createExecutionForm;

  return (
    <Container>
      <Toast />
      <ContainerHeader>
        <TileExecution>Executando a terefa</TileExecution>
        <TaskExecution>{data?.name}</TaskExecution>
      </ContainerHeader>
      <FormProvider {...createExecutionForm}>
        <FormExecution onSubmit={handleSubmit(createExecutionSubmit)} encType="multipart/form-data" method="post" id="form">
          <ContainerUploadBefore>
            <ContainerTitleUpload>
              <TitleUpload>Imagem antes</TitleUpload>
              <Form.InputFile
                name="before"
                preview={imageBefore}
                onChange={(e) => {
                  const selectedFile = e.target.files && e.target.files[0]; // Check if files is not null
                  if (selectedFile) {
                    setImageBefore(selectedFile);
                  }
                }}
              />
            </ContainerTitleUpload>
          </ContainerUploadBefore>
          <ContainerUploadAfter>
            <ContainerTitleUpload>
              <TitleUpload>Imagem depois</TitleUpload>
              <Form.InputFile
                name="after"
                preview={imageAfter}
                onChange={(e) => {
                  const selectedFile = e.target.files && e.target.files[0]; // Check if files is not null
                  if (selectedFile) {
                    setImageAfter(selectedFile);
                  }
                }}
              />
            </ContainerTitleUpload>
          </ContainerUploadAfter>
          <ContainerSubmit>
            <ButtonSubmit type="submit" disabled={isSubmitting}>
              Confirmar
            </ButtonSubmit>
            <DescExecution>Para a execução ser validada, utilize os campos para adicionar imagens de antes e depois da tarefa ser executada</DescExecution>
          </ContainerSubmit>
        </FormExecution>
      </FormProvider>
    </Container>
  );
};

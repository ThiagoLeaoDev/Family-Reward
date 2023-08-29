import React, { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Container,
  ContainerHeader,
  TitleTask,
  FormTask,
  ContainerUploadImage,
  ContainerTitleUpload,
  TitleUpload,
  ContainerSubmit,
  ButtonSubmit,
  ContainerSelect,
  ContainerInputs,
  ContainerInputName,
  ContainerInputValue,
  ContainerDescription,
} from "./styles";

import { Form } from "../../components/Form";

import { ImageUpload } from "../../utils/imageUpload";

const createTaskFormSchema = z.object({
  image: z.instanceof(FileList).transform((list) => list.item(0)!),
  name: z.string().nonempty("O nome é obrigatório"),
  category: z.string().nonempty("A categoria é obrigatória"),
  value: z.string().nonempty("O valor é obrigatório"),
  description: z.string().optional(),
});

type CreateTaskFormData = z.infer<typeof createTaskFormSchema>;

export const CreateTask: FC = () => {
  const [imageTask, setImageTask] = useState<File>();
  const createTaskForm = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskFormSchema),
  });

  async function createTask(data: CreateTaskFormData) {
    const imageUrl = await ImageUpload(data.image);

    console.log(imageUrl);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createTaskForm;

  return (
    <Container>
      <FormProvider {...createTaskForm}>
        <FormTask onSubmit={handleSubmit(createTask)} encType="multipart/form-data" method="post" id="form">
          <ContainerHeader>
            <TitleTask>Criar tarefa</TitleTask>
          </ContainerHeader>
          <ContainerUploadImage>
            <ContainerTitleUpload>
              <TitleUpload>Imagem da tarefa</TitleUpload>
              <Form.InputFile
                name="image"
                preview={imageTask}
                onChange={(e) => {
                  const selectedFile = e.target.files && e.target.files[0]; // Check if files is not null
                  if (selectedFile) {
                    setImageTask(selectedFile);
                  }
                }}
              />
            </ContainerTitleUpload>
          </ContainerUploadImage>
          <ContainerInputName>
            <Form.Field>
              <Form.Label htmlFor="name">Nome da tarefa</Form.Label>
              <Form.Input type="text" name="name" />
              <Form.ErrorMessage field="name" />
            </Form.Field>
          </ContainerInputName>
          <ContainerInputs>
            <ContainerSelect>
              <Form.Field>
                <Form.Label htmlFor="category">Categoria da tarefa</Form.Label>
                <Form.Select name="category" id="category">
                  <option value="1">Limpeza</option>
                  <option value="2">Manutenção</option>
                  <option value="3">Reparo</option>
                </Form.Select>
                <Form.ErrorMessage field="category" />
              </Form.Field>
            </ContainerSelect>
            <ContainerInputValue>
              <Form.Field>
                <Form.Label htmlFor="value">Valor da tarefa</Form.Label>
                <Form.Input type="text" name="value" />
                <Form.ErrorMessage field="value" />
              </Form.Field>
            </ContainerInputValue>
          </ContainerInputs>
          <ContainerDescription>
            <Form.Field>
              <Form.Label htmlFor="description">Descrição da tarefa (opcional)</Form.Label>
              <Form.TextArea name="description" />
              <Form.ErrorMessage field="description" />
            </Form.Field>
          </ContainerDescription>
          <ContainerSubmit>
            <ButtonSubmit type="submit" disabled={isSubmitting}>
              Confirmar
            </ButtonSubmit>
          </ContainerSubmit>
        </FormTask>
      </FormProvider>
    </Container>
  );
};

import React, { FC, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate } from "react-router-dom";

import { Container, ContainerForm, Title, Subtitle, Button } from "./styles";

import { Form } from "../../components/Form";
import { AuthContext } from "../../contexts/AuthContext";

const loginUserFormSchema = z.object({
  email: z.string().nonempty("O e-mail é obrigatório").email("Formato de e-mail inválido").toLowerCase(),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

export const Login: FC = () => {
  const { signIn, isAuthenticated } = useContext(AuthContext);

  const createUserForm = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  async function handleSignIn(data: LoginUserFormData) {
    await signIn(data);
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = createUserForm;

  const userPassword = watch("password");
  const isPasswordStrong = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})").test(userPassword);

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <Container>
      <FormProvider {...createUserForm}>
        <ContainerForm onSubmit={handleSubmit(handleSignIn)}>
          <Title>Bem vindo</Title>
          <Subtitle>Entre com suas credenciais</Subtitle>
          <Form.Field>
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input type="email" name="email" />
            <Form.ErrorMessage field="email" />
          </Form.Field>
          <Form.Field>
            <Form.Label htmlFor="password">
              Senha
              {isPasswordStrong ? <span className="text-xs text-emerald-600">Senha forte</span> : <span className="text-xs text-red-500">Senha fraca</span>}
            </Form.Label>
            <Form.Input type="password" name="password" />
            <Form.ErrorMessage field="password" />
          </Form.Field>
          <Button type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </ContainerForm>
      </FormProvider>
    </Container>
  );
};

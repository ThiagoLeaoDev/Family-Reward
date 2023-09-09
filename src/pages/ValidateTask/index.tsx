import React from "react";

import { Container, ContainerInfos, Title, TextExecutor, ImageBefore, ImageAfter, ContainerButtons, ButtonApprove, ButtonRefuse } from "./styles";

export const ValidateTask: React.FC = () => {
  return (
    <Container>
      <ContainerInfos>
        <Title>Tarefa: Lavar louça</Title>
        <TextExecutor>Executor: Thiago</TextExecutor>
      </ContainerInfos>
      <ImageBefore
        src="https://images.unsplash.com/photo-1694166055022-67ac18163546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80"
        alt="Imagem da tarefa"
      />
      <ImageAfter
        src="https://images.unsplash.com/photo-1694166055022-67ac18163546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80"
        alt="Imagem da tarefa"
      />
      <ContainerButtons>
        <ButtonRefuse>Reprovar</ButtonRefuse>
        <ButtonApprove>Aprovar</ButtonApprove>
      </ContainerButtons>
    </Container>
  );
};

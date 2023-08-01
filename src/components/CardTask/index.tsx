import React from "react";

import { Card, ContainerImage, CardImage, PillCategory, TitleCategory, CardInfos, HeaderInfos, CardTitle, TaskValue, CardDescription } from "./styles";

export const CardTask: React.FC = () => {
  return (
    <Card>
      <ContainerImage>
        <PillCategory>
          <TitleCategory>Cozinha</TitleCategory>
        </PillCategory>
        <CardImage
          src="https://images.unsplash.com/uploads/1413170239208ebba60a2/07d615e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Imagem da tarefa"
        />
      </ContainerImage>
      <CardInfos>
        <HeaderInfos>
          <CardTitle>Lavar a louça</CardTitle>
          <TaskValue>R$ 1,00</TaskValue>
        </HeaderInfos>
        <CardDescription>Lavar a louça bem lavadinha, salada saladinha, bem temperadinha</CardDescription>
      </CardInfos>
    </Card>
  );
};

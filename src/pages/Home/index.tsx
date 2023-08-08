import React, { FC, useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useTheme } from "styled-components";
import { ReadAllTasks } from "../../interfaces/categories";

import {
  Container,
  ContainerProfileInfos,
  AvatarProfile,
  ContainerText,
  TextProfile,
  NameProfile,
  ContainerSearch,
  InputSearch,
  SectionCategory,
  HeaderSection,
  TitleSection,
  ButtonSection,
  ScrollCards,
} from "./styles";

import { CardTask } from "../../components/CardTask";

import { readAllTasks } from "../../services/category";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const theme = useTheme();
  const [resCategory, setResCategory] = useState<ReadAllTasks[]>([]);

  useEffect(() => {
    readAllTasks().then((res) => {
      setResCategory(res);
    });
  }, []);

  return (
    <Container>
      <ContainerProfileInfos>
        <AvatarProfile src={"https://github.com/ThiagoLeaoDev.png"} alt="Avatar" />
        <ContainerText>
          <TextProfile>Bem vindo, denovo!</TextProfile>
          <NameProfile>Thiago Leão</NameProfile>
        </ContainerText>
      </ContainerProfileInfos>
      <ContainerSearch>
        <HiMagnifyingGlass size={28} color={theme.colors.primary} />
        <InputSearch placeholder="Pesquisar tarefa..." />
      </ContainerSearch>
      {resCategory.map((category) => (
        <SectionCategory key={category.category_id}>
          <HeaderSection>
            <TitleSection>{category.name}</TitleSection>
            <ButtonSection>Ver tudo</ButtonSection>
          </HeaderSection>
          <ScrollCards>
            {category.tasks.map((task) => (
              <CardTask key={task.id} id={task.id} image={task.image} name={task.name} description={task.description} value={task.value} category_task={category.name} created_by={task.created_by} />
            ))}
          </ScrollCards>
        </SectionCategory>
      ))}
    </Container>
  );
};

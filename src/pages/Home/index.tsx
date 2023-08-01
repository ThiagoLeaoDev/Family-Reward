import React, { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useTheme } from "styled-components";

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const theme = useTheme();

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
        <HiMagnifyingGlass size={28} color={theme.colors.text_primary} />
        <InputSearch placeholder="Pesquisar tarefa..." />
      </ContainerSearch>
      <SectionCategory>
        <HeaderSection>
          <TitleSection>Cozinha</TitleSection>
          <ButtonSection>Ver tudo</ButtonSection>
        </HeaderSection>
        <ScrollCards>
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
          <CardTask />
        </ScrollCards>
      </SectionCategory>
    </Container>
  );
};

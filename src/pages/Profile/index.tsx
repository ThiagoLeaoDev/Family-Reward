import React, { FC } from "react";
import { HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineExclamationCircle } from "react-icons/hi2";
import { useTheme } from "styled-components";

import {
  ProfileContainer,
  ProfileName,
  ContainerAvatar,
  BoxAvatar,
  ContainerInfos,
  ContainerProfileInfos,
  TagRole,
  Avatar,
  ProfileEmail,
  ContainerInfosTasks,
  TopInfoTasks,
  BoxQuantityTasks,
  ContainerTitle,
  TitleBox,
  ContainerIcon,
  TextTask,
  BoxEarnings,
  BottomInfoTasks,
  BoxValidationTasks,
  DescBox,
  ContainerInValidation,
  ContainerGroupText,
  ContainerPossibleEarnings,
  ContainerDescBox,
  DescPossibleEarnings,
} from "./styles";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const theme = useTheme();
  const user = {
    name: "Thiago Leão",
    image: "https://github.com/ThiagoLeaoDev.png",
    email: "thiago.leaox@gmail.com",
    role: "Coelho branco 🐰",
    tasksCompleted: 5,
    earnings: 1.55,
    tasksInValidation: 2,
  };

  return (
    <ProfileContainer>
      <ContainerProfileInfos>
        <ContainerAvatar>
          <BoxAvatar>
            <Avatar src={user.image} alt="Profile Image" />
          </BoxAvatar>
          <TagRole>{user.role}</TagRole>
        </ContainerAvatar>
        <ContainerInfos>
          <ProfileName>{user.name}</ProfileName>
          <ProfileEmail>{user.email}</ProfileEmail>
        </ContainerInfos>
      </ContainerProfileInfos>
      <ContainerInfosTasks>
        <TopInfoTasks>
          <BoxQuantityTasks>
            <ContainerTitle>
              <TitleBox>Completas</TitleBox>
              <ContainerIcon>
                <HiOutlineCheckCircle size={20} color={theme.colors.text_negative} />
              </ContainerIcon>
            </ContainerTitle>
            <TextTask>{user.tasksCompleted}</TextTask>
          </BoxQuantityTasks>
          <BoxEarnings>
            <ContainerTitle>
              <TitleBox>Ganhos</TitleBox>
              <ContainerIcon>
                <HiOutlineCurrencyDollar size={20} color={theme.colors.text_negative} />
              </ContainerIcon>
            </ContainerTitle>
            <TextTask>{user.earnings ? `R$ ${user.earnings.toFixed(2).replace(".", ",")}` : "R$ 0,00"}</TextTask>
          </BoxEarnings>
        </TopInfoTasks>
        <BottomInfoTasks>
          <BoxValidationTasks>
            <ContainerTitle>
              <TitleBox>Em validação</TitleBox>
              <ContainerIcon>
                <HiOutlineExclamationCircle size={20} color={theme.colors.text_negative} />
              </ContainerIcon>
            </ContainerTitle>
            <ContainerGroupText>
              <ContainerInValidation>
                <ContainerPossibleEarnings>
                  <TextTask>{user.tasksInValidation ? `R$ ${user.tasksInValidation.toFixed(2).replace(".", ",")}` : "R$ 0,00"} - 2 tarefas</TextTask>
                  <DescPossibleEarnings>possíveis ganhos</DescPossibleEarnings>
                </ContainerPossibleEarnings>
              </ContainerInValidation>
            </ContainerGroupText>
            <ContainerDescBox>
              <DescBox>Caso alguma tarefa não seja aprovada o valor não será adicionado aos ganhos</DescBox>
            </ContainerDescBox>
          </BoxValidationTasks>
        </BottomInfoTasks>
      </ContainerInfosTasks>
    </ProfileContainer>
  );
};

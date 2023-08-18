import React, { FC } from "react";
import { HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineExclamationCircle } from "react-icons/hi2";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";

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
  const { user } = useAuth();

  return (
    <ProfileContainer>
      <ContainerProfileInfos>
        <ContainerAvatar>
          <BoxAvatar>
            <Avatar src={user ? user.image : ""} alt="Profile Image" />
          </BoxAvatar>
          <TagRole>{user ? (user.role === "user" ? "Twiby" : "Administrador") : "Usuário"}</TagRole>
        </ContainerAvatar>
        <ContainerInfos>
          <ProfileName>{user ? user.name : "Usuário"}</ProfileName>
          <ProfileEmail>{user ? user.email : "Email"}</ProfileEmail>
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
            <TextTask>0</TextTask>
          </BoxQuantityTasks>
          <BoxEarnings>
            <ContainerTitle>
              <TitleBox>Ganhos</TitleBox>
              <ContainerIcon>
                <HiOutlineCurrencyDollar size={20} color={theme.colors.text_negative} />
              </ContainerIcon>
            </ContainerTitle>
            <TextTask>R$ 0,00</TextTask>
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
                  <TextTask>R$ 0,00</TextTask>
                  <DescPossibleEarnings>possíveis ganhos</DescPossibleEarnings>
                </ContainerPossibleEarnings>
              </ContainerInValidation>
            </ContainerGroupText>
            <ContainerDescBox>
              <DescBox>Caso alguma tarefa seja reprovada o valor não será adicionado aos ganhos</DescBox>
            </ContainerDescBox>
          </BoxValidationTasks>
        </BottomInfoTasks>
      </ContainerInfosTasks>
    </ProfileContainer>
  );
};

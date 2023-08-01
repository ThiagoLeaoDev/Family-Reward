import React, { FC } from "react";
import { HiOutlineCheckCircle, HiOutlineCurrencyDollar } from "react-icons/hi2";
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
  TextQuantityTasks,
  BoxEarnings,
  TextEarnings,
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
            <TextQuantityTasks>{user.tasksCompleted}</TextQuantityTasks>
          </BoxQuantityTasks>
          <BoxEarnings>
            <ContainerTitle>
              <TitleBox>Ganhos</TitleBox>
              <ContainerIcon>
                <HiOutlineCurrencyDollar size={20} color={theme.colors.text_negative} />
              </ContainerIcon>
            </ContainerTitle>
            <TextEarnings>{user.earnings ? `R$ ${user.earnings.toFixed(2).replace(".", ",")}` : "R$ 0,00"}</TextEarnings>
          </BoxEarnings>
        </TopInfoTasks>
      </ContainerInfosTasks>
    </ProfileContainer>
  );
};

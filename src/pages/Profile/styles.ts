import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 26px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;


export const ProfileInfo = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ContainerProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerAvatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxAvatar = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  padding: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const TagRole = styled.span`
  z-index: 1;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text_negative};
  border-radius: 20px;
  font-size: 12px;
  font-weight: medium;
  margin-bottom: 5px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileName = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 4px;
`;

export const ProfileEmail = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.text_primary};
  opacity: 0.6;
`;

export const ContainerInfosTasks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TopInfoTasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BoxQuantityTasks = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 12px;
  padding: 12px;
  margin-right: 10px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBox = styled.h3`
  font-size: 12px;
  font-weight: normal;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary + "90"};
  border-radius: 50%;
  padding: 5px;
`;

export const TextTask = styled.p`
  font-size: 20px;
  font-weight: medium;
  margin-top: 5px;
`;

export const BoxEarnings = styled(BoxQuantityTasks)`
  width: 60%;
  margin-right: 0px;
  margin-left: 10px;
`;

export const BottomInfoTasks = styled(TopInfoTasks)`
  margin-top: 10px;
`;

export const BoxValidationTasks = styled(BoxQuantityTasks)`
  width: 100%;
  margin-right: 0px;
`;

export const ContainerGroupText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const ContainerInValidation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 30px;
`;

export const ContainerPossibleEarnings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DescPossibleEarnings = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const ContainerDescBox = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const DescBox = styled.p`
  font-size: 10px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text_secondary};
  margin-top: 5px;
`;

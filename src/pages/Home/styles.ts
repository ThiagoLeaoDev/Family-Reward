import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  padding: 26px;
  box-sizing: border-box;
`;

export const ContainerProfileInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const AvatarProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextProfile = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const NameProfile = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 500;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 12px;
  padding: 4px 16px;
  margin: 30px 0;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text_primary};
  margin-left: 12px;
`;

export const SectionCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleSection = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 600;
  margin-right: 10px;
`;

export const ButtonSection = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const ScrollCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 100%;
  margin-top: 20px;
  gap: 20px;

  &::-webkit-scrollbar {
    height: 4px;
  }
`;

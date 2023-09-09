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

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_primary};
  width: 100%;
`;

export const TextExecutor = styled(Title)`
  font-size: 16px;
`;

export const ImageBefore = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 40px;
`;

export const ImageAfter = styled(ImageBefore)`
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonRefuse = styled.button`
  width: 48%;
  height: 44px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const ButtonApprove = styled(ButtonRefuse)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

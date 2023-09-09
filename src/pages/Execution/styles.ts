import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
  min-height: 100vh;
  width: 100%;
  padding: 26px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TileExecution = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const TaskExecution = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 10px;
`;

export const FormExecution = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerUploadBefore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ContainerTitleUpload = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleUpload = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 12px;
  align-self: start;
`;

export const ContainerUploadAfter = styled(ContainerUploadBefore)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ContainerSubmit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const DescExecution = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_secondary};
  text-align: center;
  margin-top: 20px;
`;

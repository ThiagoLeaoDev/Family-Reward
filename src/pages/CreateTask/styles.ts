import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
  min-height: 100vh;
  width: 100%;
  padding: 26px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TitleTask = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_primary};
`;

export const FormTask = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
`;

export const ContainerUploadImage = styled.div`
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


export const ContainerSelect = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContainerInputName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const ContainerInputValue = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ContainerDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

import styled from "styled-components";

export const InputFileComponent = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const LabelUpload = styled.label`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.colors.text_primary};
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-weight: 400;
  cursor: pointer;
`;

export const InputUpload = styled.input`
  opacity: 0;
`;

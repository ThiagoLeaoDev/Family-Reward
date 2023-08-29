import styled from "styled-components";

// <InputFileComponent>
//   { preview && <PreviewImage src={ URL.createObjectURL(preview) } alt = "Imagem antes" />}
// <LabelUpload htmlFor="before" > { preview? "Alterar imagem": "Adicionar imagem" } < /LabelUpload>
//   < InputUpload type = "file" name = "before" id = "before" onChange = {(event) => setImageTask(event.target.files![0])} />
//     < /InputFileComponent>

export const InputFileComponent = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
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
  min-height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const LabelUpload = styled.label`
  display: block;
  z-index: 2;
  width: 100%;
  padding: 70px 10px;
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

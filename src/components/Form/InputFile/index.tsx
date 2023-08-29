import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { InputFileComponent, PreviewImage, LabelUpload, InputUpload } from "./styles";

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  preview?: File;
}

export function InputFile(props: InputFileProps) {
  const { register } = useFormContext();

  return (
    <InputFileComponent>
      {props.preview && <PreviewImage src={URL.createObjectURL(props.preview)} alt="Imagem antes" />}
      <LabelUpload htmlFor={props.name}>{props.preview ? "Alterar imagem" : "Adicionar imagem"}</LabelUpload>
      <InputUpload type="file" id={props.name} {...register(props.name)} {...props} />
    </InputFileComponent>
  );
}

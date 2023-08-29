import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { TextAreaComponent } from "./styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export function TextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  return <TextAreaComponent id={props.name} {...register(props.name)} {...props} />;
}

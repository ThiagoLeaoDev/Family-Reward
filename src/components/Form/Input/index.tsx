import React, { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { InputComponent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input(props: InputProps) {
  const { register } = useFormContext();

  return <InputComponent id={props.name} {...register(props.name)} {...props} />;
}

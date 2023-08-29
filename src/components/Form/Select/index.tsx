import React, { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

import { SelectComponent } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

export function Select(props: SelectProps) {
  const { register } = useFormContext();

  return (
    <SelectComponent id={props.name} {...register(props.name)} {...props}>
      {props.children}
    </SelectComponent>
  );
}

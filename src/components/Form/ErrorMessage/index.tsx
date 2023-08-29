import React, { useFormContext } from "react-hook-form";

import { ErrorMessageComponent } from "./styles";

interface ErrorMessageProps {
  field: string;
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) {
    return null;
  }

  return <ErrorMessageComponent>{fieldError.message?.toString()}</ErrorMessageComponent>;
}

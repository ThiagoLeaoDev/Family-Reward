import React, { HTMLAttributes } from "react";

import { Container } from "./styles";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps) {
  return <Container {...props} />;
}

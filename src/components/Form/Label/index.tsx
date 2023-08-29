import React, { LabelHTMLAttributes } from "react";

import { LabelComponent } from "./styles";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <LabelComponent {...props} />;
}

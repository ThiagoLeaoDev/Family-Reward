import React, { FC } from "react";

import { PillCategory, TitleCategory } from "./styles";

interface PillProps {
  text: string | undefined;
}

export const Pill: FC<PillProps> = ({ text }) => {
  return (
    <PillCategory>
      <TitleCategory>{text}</TitleCategory>
    </PillCategory>
  );
};

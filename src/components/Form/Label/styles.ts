import styled from "styled-components";

export const LabelComponent = styled.label`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.text_secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

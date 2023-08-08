import styled from "styled-components";

export const PillCategory = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.primary + "90"};
  padding: 4px 8px;
  border-radius: 12px;
`;

export const TitleCategory = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.text_negative};
`;

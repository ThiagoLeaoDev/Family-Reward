import styled from "styled-components";

export const ErrorMessageComponent = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.warning};
  margin-top: 12px;
`;

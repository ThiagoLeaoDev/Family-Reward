import styled from "styled-components";

export const TextAreaComponent = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 6px;
  padding: 14px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text_primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_secondary};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

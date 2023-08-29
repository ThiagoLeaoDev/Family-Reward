import styled from "styled-components";

export const InputComponent = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 6px;
  padding: 0 14px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text_primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_secondary};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

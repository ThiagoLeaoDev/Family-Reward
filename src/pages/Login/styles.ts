import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 80px 26px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_primary};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text_primary};
  text-align: center;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  border-radius: 6px;
  padding: 0 14px;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text_primary};
  margin-bottom: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_secondary};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.warning};
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;


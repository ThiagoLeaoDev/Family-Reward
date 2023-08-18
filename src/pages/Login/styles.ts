import styled from "styled-components";

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  padding: 80px 26px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const GradientOverlay = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
`;

export const ContainerContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_negative};
  text-align: center;
  padding: 100px 20px 20px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text_negative};
  text-align: center;
  margin-bottom: 40px;
`;

// export const GoogleLoginButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 18px;
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: ${({ theme }) => theme.colors.text_negative};
//   border: none;
//   border-radius: 8px;
//   font-size: 16px;
//   font-weight: bold;
//   margin: 40px auto;
//   cursor: pointer;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

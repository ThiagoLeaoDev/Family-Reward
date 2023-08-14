import styled from "styled-components";

export const Card = styled.div`
  width: 310px;
  height: 200px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 10px;
`;


export const ContainerImage = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: aliceblue;

`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const CardInfos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const HeaderInfos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: 500;
`;

export const TaskValue = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardDescription = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

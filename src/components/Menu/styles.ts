import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 20px;
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 100%;
  padding: 6px 20px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 40px;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
`;


export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active {
    svg {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
  `;

import React, { FC } from "react";
import { HiOutlineHome, HiOutlineUser, HiOutlineSearch, HiOutlineCash, HiOutlineCog } from "react-icons/hi";
import { useTheme } from "styled-components";

import { ContainerNav, NavBox, NavItem } from "./styles";

export const Menu: FC = () => {
  const theme = useTheme();

  return (
    <ContainerNav>
      <NavBox>
        <NavItem to="/home">
          <HiOutlineHome color={theme.colors.text_secondary} size={24} />
        </NavItem>
        <NavItem to="/login">
          <HiOutlineSearch color={theme.colors.text_secondary} size={24} />
        </NavItem>
        <NavItem to="/deposits">
          <HiOutlineCash color={theme.colors.text_secondary} size={24} />
        </NavItem>
        <NavItem to="/settings">
          <HiOutlineCog color={theme.colors.text_secondary} size={24} />
        </NavItem>
        <NavItem to="/profile">
          <HiOutlineUser color={theme.colors.text_secondary} size={24} />
        </NavItem>
      </NavBox>
    </ContainerNav>
  );
};

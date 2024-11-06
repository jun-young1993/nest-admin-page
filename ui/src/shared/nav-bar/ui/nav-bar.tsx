// src/components/NavBar.tsx
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #007bff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.div`
  font-weight: bold;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "@/theme/ThemeProvider";

export const App = () => {
  return (
    <ThemeProvider themeName="sample">
      <Title>Hello, React World !</Title>
      <SubTitle>author: kobakazu0429</SubTitle>
    </ThemeProvider>
  );
};

const Title = styled.h1`
  color: ${props => props.theme.color.text.primary};
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.color.text.secondary};
`;

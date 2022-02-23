import React from "react";
import * as Styled from "./styles";

const githubicon = require("../../assets/icon/github-icon.png");

interface IRequiredMessage {
  children: React.ReactNode;
}

export const DefaultScreenBackground = (props: IRequiredMessage) => {
  return (
    <Styled.Container>
      <Styled.ContainerGithubIcon>
        <Styled.GithubIcon source={githubicon} />
      </Styled.ContainerGithubIcon>
      <Styled.Tab>{props.children}</Styled.Tab>
    </Styled.Container>
  );
};

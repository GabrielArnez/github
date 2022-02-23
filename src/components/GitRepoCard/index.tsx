import react from "react";
import * as Styled from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

interface IGitRepoCard {
  name: string;
  description: string | null;
}

export const GitRepoCard = ({ name, description }: IGitRepoCard) => {
  return (
    <Styled.Container>
      <FontAwesome name="folder" size={40} color="#7EB6FF" />
      <Styled.ContainerRepoTitle>
        <Styled.RepoTitle>{name}</Styled.RepoTitle>
        <Styled.RepoDesc>{description}</Styled.RepoDesc>
      </Styled.ContainerRepoTitle>
    </Styled.Container>
  );
};

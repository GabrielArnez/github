import React, { useState } from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import * as Styled from "./styles";
import { userService } from "../../services/userGitService";
import { GitPeopleCard } from "../../components/GitPeopleCard";
import { DefaultScreenBackground } from "../../components/DefaultScreenBackground";

const githubicon = require("../../assets/icon/github-icon.png");
const octocat = require("../../assets/icon/octocat.png");

interface IRepoList {
  incomplete_results: boolean;
  items: IRepoListItems[];
}

interface IRepoListItems {
  avatar_url: string;
  id: number;
  repos_url: string;
  login: string;
}

export const Home = ({ navigation }: any) => {
  const [userName, setUserName] = useState<string>("");
  const [repoList, setRepoList] = useState<IRepoListItems[]>([]);

  const handleSearchUser = async () => {
    if (userName != "") {
      const response: IRepoList = await userService.getByName(userName);
      if (response.items.length > 0) {
        setRepoList(response.items);
      } else {
        setRepoList([]);
      }
    } else {
      setRepoList([]);
    }
  };

  return (
    <DefaultScreenBackground>
      <Styled.InputContainer>
        <Styled.Input
          autoCapitalize="none"
          placeholder="Buscar usuário"
          onChangeText={setUserName}
        />
        <Styled.FormButton onPress={handleSearchUser}>
          <FontAwesome name="search" size={24} color="white" />
        </Styled.FormButton>
      </Styled.InputContainer>
      {repoList.length > 0 ? (
        <Styled.ContainerContent>
          <Styled.Text style={{ marginBottom: 15 }}>
            Usuários Encontrados
          </Styled.Text>
          <FlatList
            data={repoList}
            renderItem={({ item }) => {
              return <GitPeopleCard {...item} navigation={navigation} />;
            }}
          />
        </Styled.ContainerContent>
      ) : (
        <Styled.ContainerNotContent>
          <Styled.ImageOctocat source={octocat} />
          <Styled.Text> Está meio vazio por aqui !</Styled.Text>
          <Styled.Text> Busque por um usuário</Styled.Text>
        </Styled.ContainerNotContent>
      )}
    </DefaultScreenBackground>
  );
};

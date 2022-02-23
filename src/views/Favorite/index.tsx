import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { DefaultScreenBackground } from "../../components/DefaultScreenBackground";
import * as Styled from "./styles";
import { useIsFocused } from "@react-navigation/native";

const octocat = require("../../assets/icon/octocat.png");

import { GitPeopleFavoCard } from "../../components/GitPeopleFavoCard ";
import { asyncStorageService } from "../../services/asyncStorageService";

interface IRepoStorage {
  id: number;
  avatar_url: string;
  login: string;
}

export const Favorite = ({ navigation }: any) => {
  const [listSavedRepo, setListSavedRepo] = useState<IRepoStorage[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
    }
    getSavedRepo();
  }, [isFocused]);

  const getSavedRepo = async () => {
    const savedRepos = await asyncStorageService.getSavedRepo();
    setListSavedRepo(savedRepos);
  };

  return (
    <DefaultScreenBackground>
      {listSavedRepo.length > 0 ? (
        <View>
          <Styled.Text style={{ marginBottom: 20 }}>Meus Favoritos</Styled.Text>
          <FlatList
            data={listSavedRepo}
            renderItem={({ item }) => {
              return (
                <GitPeopleFavoCard
                  {...item}
                  navigation={navigation}
                  getSavedRepo={getSavedRepo}
                />
              );
            }}
          />
        </View>
      ) : (
        <Styled.ContainerNotContent>
          <Styled.ImageOctocat source={octocat} />
          <Styled.Text> Está meio vazio por aqui !</Styled.Text>
          <Styled.Text> Favorite um usuario</Styled.Text>
        </Styled.ContainerNotContent>
      )}
    </DefaultScreenBackground>
  );
};

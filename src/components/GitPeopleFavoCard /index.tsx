import React from "react";
import * as Styled from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IGitPeopleCard {
  id: number;
  repos_url?: string;
  avatar_url: string;
  login: string;
  navigation?: any;
  getSavedRepo: () => void;
}

interface IRepoStorage {
  id: number;
  avatar_url: string;
  login: string;
}

export const GitPeopleFavoCard = ({
  id,
  avatar_url,
  login,
  repos_url,
  navigation,
  getSavedRepo,
}: IGitPeopleCard) => {
  const handleDeleteStorage = async () => {
    try {
      const savedRepos = await AsyncStorage.getItem("@favorite_repo");
      if (savedRepos) {
        const parsedSavedRepos: IRepoStorage[] = JSON.parse(savedRepos);
        const filterSavedRepos = parsedSavedRepos.filter(
          (repo) => repo.id != id
        );

        await AsyncStorage.setItem(
          "@favorite_repo",
          JSON.stringify(filterSavedRepos)
        );
        getSavedRepo();
      }
    } catch (e) {
      Alert.alert("Não foi recuperar os repositorios salvos.");
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("UserRepo", { login, id, avatar_url, repos_url })
      }
    >
      <Styled.Container>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Styled.Image source={{ uri: avatar_url }} />
          <Styled.Title>{login}</Styled.Title>
        </View>
        <FontAwesome
          name="trash"
          size={18}
          color="red"
          onPress={() => handleDeleteStorage()}
        />
      </Styled.Container>
    </TouchableOpacity>
  );
};

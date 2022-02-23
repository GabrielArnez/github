import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { DefaultScreenBackground } from "../../components/DefaultScreenBackground";
import { userService } from "../../services/userGitService";
import * as Styled from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GitRepoCard } from "../../components/GitRepoCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncStorageService } from "../../services/asyncStorageService";

interface IUserRepoParams {
  id: number;
  repos_url: string;
  avatar_url: string;
  login: string;
  navigation: any;
}

interface IListRepo {
  name: string;
  description: string | null;
}

interface IRepoStorage {
  id: number;
  repos_url: string;
  login: string;
}

export const UserRepo = () => {
  const routes = useRoute();
  const { id, navigation, avatar_url, login, repos_url } =
    routes.params as IUserRepoParams;

  const [listRepo, setListRepo] = useState<IListRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    getGitRepo();
  }, []);

  useEffect(() => {
    if (isFocused) getSavedRepo();
  }, [isFocused]);

  const getGitRepo = async () => {
    const repo = await userService.listRepoByName(login);
    setLoading(false);
    if (repo) {
      setListRepo(repo);
    } else {
      setListRepo([]);
    }
  };

  const getSavedRepo = async () => {
    const isSaved = await asyncStorageService.isSavedRepo(id);
    setIsSaved(isSaved);
  };

  const handleSaveRepo = async () => {
    const userRepo = {
      id,
      login,
      avatar_url,
    };

    const oldestStorage = await AsyncStorage.getItem("@favorite_repo");

    if (oldestStorage) {
      const parsedOldestStorage: IRepoStorage[] = JSON.parse(oldestStorage);
      if (isSaved) {
        Alert.alert("Já esta favoritado");
      } else {
        await AsyncStorage.setItem(
          "@favorite_repo",
          JSON.stringify([...parsedOldestStorage, userRepo])
        );
        setIsSaved(true);
      }
    } else {
      await AsyncStorage.setItem("@favorite_repo", JSON.stringify([userRepo]));
    }

    // try {
    // } catch (e) {
    //   // saving error
    // }
  };

  return (
    <DefaultScreenBackground>
      <Styled.Container>
        <Styled.FavoriteContainer>
          <Styled.FavoriteText>Favoritar {login} ? </Styled.FavoriteText>
          <TouchableOpacity onPress={() => handleSaveRepo()}>
            <Ionicons
              name="heart-circle-sharp"
              size={35}
              color={isSaved ? "red" : "black"}
            />
          </TouchableOpacity>
        </Styled.FavoriteContainer>
        <Styled.ReposContainer>
          {!loading ? (
            <FlatList
              data={listRepo}
              renderItem={({ item }) => {
                return <GitRepoCard {...item} />;
              }}
            />
          ) : (
            <ActivityIndicator />
          )}
        </Styled.ReposContainer>
      </Styled.Container>
    </DefaultScreenBackground>
  );
};

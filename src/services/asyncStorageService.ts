import AsyncStorage from "@react-native-async-storage/async-storage";

interface IRepoStorage {
  id: number;
  avatar_url: string;
  login: string;
}

const isSavedRepo: (id: number) => Promise<boolean> = async (id: number) => {
  const savedRepos = await AsyncStorage.getItem("@favorite_repo");
  if (savedRepos) {
    const parsedSavedRepos: IRepoStorage[] = JSON.parse(savedRepos);
    const storageExists = parsedSavedRepos.find((storage) => storage.id == id);
    if (storageExists) {
      return true;
    }
  }
  return false;
};

const getSavedRepo: () => Promise<IRepoStorage[]> = async () => {
  const savedRepos = await AsyncStorage.getItem("@favorite_repo");
  if (savedRepos) {
    const parsedSavedRepos: IRepoStorage[] = JSON.parse(savedRepos);
    return parsedSavedRepos;
  }
  return [];
};

export const asyncStorageService = { isSavedRepo, getSavedRepo };

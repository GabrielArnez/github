import { api } from "./api";

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

const getByName = async (user_name: string) => {
  try {
    const { data } = await api.get(`/search/users?q=${user_name}`);
    return data;
  } catch (e) {
    return null;
  }
};

const listRepoByName = async (user_name: string) => {
  try {
    const response = await api.get(`/users/${user_name}/repos`);
    return response.data;
  } catch (e) {
    return null;
  }
};

export const userService = {
  getByName,
  listRepoByName,
};

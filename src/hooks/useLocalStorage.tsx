import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUseLocalStorage {
  key: string;
  value: string;
}

export const useLocalStorage = ({ key, value }: IUseLocalStorage) => {
  const [state, setState] = useState(async () => {
    const oldValue = await AsyncStorage.getItem(key);
    return oldValue ? oldValue : value;
  });

  useEffect(() => {
    saveInStorage({ key, value });
  }, [key, value]);

  const saveInStorage = async ({ key, value }: IUseLocalStorage) => {
    await AsyncStorage.setItem(key, value);
  };

  return [state, setState];
};

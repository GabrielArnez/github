import * as SQlite from "expo-sqlite";

export const DatabaseConnection = {
  getConnection: () => SQlite.openDatabase("database.db"),
};

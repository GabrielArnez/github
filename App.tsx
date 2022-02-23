import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import DatabaseInit from "./src/database/dataBaseInit";
import { StackRoutes } from "./src/routes/stack.route";
import { TabRoutes } from "./src/routes/tab.route";

export default function App() {
  useEffect(() => {
    new DatabaseInit();
  }, []);

  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

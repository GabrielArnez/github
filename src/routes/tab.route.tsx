import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Favorite } from "../views/Favorite";
import { StackRoutes } from "./stack.route";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={24}
              color={focused ? "black" : "#D6D6D6"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Favorite}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="heart"
              size={24}
              color={focused ? "black" : "#D6D6D6"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

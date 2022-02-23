import React from "react";
import * as Styled from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

interface IGitPeopleCard {
  id: number;
  repos_url?: string;
  avatar_url: string;
  login: string;
  navigation?: any;
}

export const GitPeopleCard = ({
  id,
  avatar_url,
  login,
  repos_url,
  navigation,
}: IGitPeopleCard) => {
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
        <FontAwesome name="chevron-right" size={18} color="#c3c3c3" />
      </Styled.Container>
    </TouchableOpacity>
  );
};

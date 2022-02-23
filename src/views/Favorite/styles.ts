import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #040404;
`;

export const ContainerGithubIcon = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const GithubIcon = styled.Image`
  width: 55px;
  height: 55px;
  margin-bottom: 15px;
  margin-right: 25px;
`;

export const Tab = styled.View`
  background-color: #fdfdfd;
  flex: 1;
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 40px 35px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  border: 1px solid #c7bebe;
  flex: 6;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  padding-left: 5px;
`;

export const ContainerNotContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageOctocat = styled.Image`
  width: 180px;
  height: 180px;
`;

export const Text = styled.Text`
  color: #c3c3c3;
  font-size: 16px;
`;

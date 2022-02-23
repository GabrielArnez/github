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

import styled from "styled-components/native";

export const InputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Input = styled.TextInput`
  border: 1px solid #c7bebe;
  flex: 6;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  padding-left: 5px;
`;

export const FormButton = styled.TouchableOpacity`
  flex: 2;
  background-color: #018aff;
  margin-left: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ContainerNotContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerContent = styled.View``;

export const ImageOctocat = styled.Image`
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: #c3c3c3;
  font-size: 16px;
`;

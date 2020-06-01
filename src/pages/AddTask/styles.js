import styled from 'styled-components/native';
import { darken } from 'polished';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: #222;
  align-items: center;
`;

export const TextInputContainer = styled.View`
  width: 100%;
  background: ${darken(0.03, '#222')};
  flex-direction: row;
  align-items: center;
`;

export const TextTitle = styled.TextInput`
  height: 70px;
  width: 100%;
  color: #fff;
  font-size: 24px;
  padding: 10px;
`;

export const Icon = styled(FontAwesome)`
  margin-left: 10px;
`;

export const DateContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const ButtonDateTimeArea = styled.View`
  flex-direction: row;
`;

export const ButtonDateTime = styled.View`
  margin-right: 10px;
`;

export const TextAreaDescription = styled.View`
  width: 95%;
  height: 100px;
  margin: 20px 10px;
  border-radius: 4px;
  border: 1px solid #333;
`;

export const TextDescription = styled.TextInput`
  color: #fff;
  margin: 0 5px;
  font-size: 16px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #7d40e7;
  width: 95%;
  height: 80px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;

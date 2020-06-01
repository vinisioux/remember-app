import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: #222;
  align-items: center;
`;

export const TaskContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const TasksList = styled(FlatList)`
  flex: 1;
  padding: 0 10px;
`;

export const Task = styled.TouchableOpacity`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  flex-direction: row;
`;

export const TaskArea = styled.View`
  font-size: 16px;
  margin-left: 5px;
  width: 100%;
`;

export const TaskTitle = styled.Text`
  font-size: 16px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 60px;
  right: 60px;
`;

export const TaskHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

export const TaskHeaderDatetime = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
`;

export const Icon = styled(FontAwesome)`
  margin-left: 10px;
`;

export const DescriptionArea = styled.View`
  margin: 10px 5px 0 0;
`;

export const DescriptionText = styled.Text`
  color: #777;
`;

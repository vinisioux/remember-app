import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { format } from 'date-fns';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  TasksList,
  TaskContainer,
  AddTaskButton,
  TaskArea,
  Task,
  TaskTitle,
  TaskHeader,
  TaskHeaderDatetime,
  DescriptionArea,
  DescriptionText,
} from './styles';

const Main = ({ navigation }) => {
  useEffect(() => {
    // const alarm = await RNCalendarEvents.authorizationStatus();
  }, []);

  return (
    <Container>
      <TaskContainer>
        <TasksList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              onPress={() => navigation.navigate('TaskDetail', { task: item })}
            >
              <TaskArea>
                <TaskHeader>
                  <TaskTitle>{item.title}</TaskTitle>
                  <TaskHeaderDatetime>
                    <FontAwesome name="clock-o" color="#000" size={20} />
                    <Text>{String(format(item.datetime, 'dd/MM/yyyy'))}</Text>
                    <Text>{String(format(item.datetime, 'HH:mm')) + ' H'}</Text>
                  </TaskHeaderDatetime>
                </TaskHeader>
                <DescriptionArea>
                  <DescriptionText>
                    {item.description.length > 90
                      ? item.description.substr(0, 90) + '...'
                      : item.description}
                  </DescriptionText>
                </DescriptionArea>
              </TaskArea>
            </Task>
          )}
        />
      </TaskContainer>
      <AddTaskButton
        onPress={() => {
          navigation.navigate('AddTask');
        }}
      >
        <FontAwesome name="plus-circle" size={70} color="#7539dd" />
      </AddTaskButton>
    </Container>
  );
};

export default Main;

const tasks = [
  {
    id: '1',
    title: 'pontoaaaaaaaaaaaaaaa',
    datetime: new Date(),
    description:
      'Descriaaoadoalembretea1aaaaaaaaaaaaaaaaaaaassdasdasdsaaaaaaaaaaaaaaaaaaaadsaaxaaaSaasdaasdasasdasdasasdasdad',
  },
  {
    id: '2',
    title: 'dentista',
    datetime: new Date(),
    description: 'Descrição do lembrete 2',
  },
  {
    id: '3',
    title: 'estudar',
    datetime: new Date(),
    description: 'Descrição do lembrete 3',
  },
  {
    id: '4',
    title: 'jantar',
    datetime: new Date(),
    description: 'Descrição do lembrete 4',
  },
  {
    id: '5',
    title: 'jogar lol',
    datetime: new Date(),
    description: 'Descrição do lembrete 5',
  },
  {
    id: '6',
    title: 'dormir',
    datetime: new Date(),
    description: 'Descrição do lembrete 6',
  },
];

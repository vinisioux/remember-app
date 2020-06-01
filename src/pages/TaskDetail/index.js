import React, { useState, useEffect } from 'react';
import { Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import {
  Container,
  TextInputContainer,
  TextTitle,
  Icon,
  DateContainer,
  ButtonDateTimeArea,
  ButtonDateTime,
  TextAreaDescription,
  TextDescription,
  SaveButton,
} from './styles';

const TaskDetail = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const task = navigation.state.params.task;

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    setTaskTitle(task.title);
    setTaskDescription(task.description);
  }, [task.description, task.title]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  function saveTask(data) {
    navigation.goBack();
  }

  return (
    <Container>
      <TextInputContainer>
        <Icon name="tag" color="#fff" size={35} />
        <TextTitle
          placeholder="Lembrete"
          placeholderTextColor="#444"
          value={taskTitle}
          onChangeText={(title) => setTaskTitle(title)}
        />
      </TextInputContainer>
      <DateContainer>
        <Icon name="clock-o" color="#fff" size={35} />
        <ButtonDateTimeArea>
          <ButtonDateTime>
            <Button
              onPress={showDatepicker}
              title={String(format(date, 'dd/MM/yyyy'))}
              color="#555"
            />
          </ButtonDateTime>
          <ButtonDateTime>
            <Button
              onPress={showTimepicker}
              title={String(format(date, 'HH:mm')) + ' H'}
              color="#555"
            />
          </ButtonDateTime>
        </ButtonDateTimeArea>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </DateContainer>
      <TextAreaDescription>
        <TextDescription
          value={taskDescription}
          onChangeText={(description) => setTaskDescription(description)}
          placeholder="Descrição"
          placeholderTextColor="#444"
          multiline
        />
      </TextAreaDescription>
      <SaveButton onPress={() => saveTask('asdas')}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          Salvar
        </Text>
      </SaveButton>
    </Container>
  );
};

export default TaskDetail;

import React, { useState } from 'react';
import { Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import ReactNativeAN from 'react-native-alarm-notification';
import Id from '../../utils/randomId';

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

const AddTask = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

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

  async function saveTask() {
    // const fire_date = ReactNativeAN.parseDate(new Date(Date.now() + 2000));
    const fire_date = ReactNativeAN.parseDate(date);
    console.log(fire_date);

    const id = Id();

    const alarmData = {
      alarm_id: id,
      title: taskTitle,
      message: taskDescription,
      small_icon: 'ic_launcher',
      schedule_once: true,
      fire_date,
    };

    ReactNativeAN.scheduleAlarm(alarmData);
    // ReactNativeAN.sendNotification(alarmData);

    // const alarms = await ReactNativeAN.getScheduledAlarms();
    // console.log(alarms);

    ReactNativeAN.deleteAlarm('12345');

    navigation.goBack();
  }

  return (
    <Container>
      <TextInputContainer>
        <Icon name="tag" color="#fff" size={35} />
        <TextTitle
          placeholder="Lembrete"
          placeholderTextColor="#444"
          maxLength={20}
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
              title={String(format(date, 'HH:mm')) + ' h'}
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
          placeholder="Descrição"
          placeholderTextColor="#444"
          multiline
          onChangeText={(description) => setTaskDescription(description)}
        />
      </TextAreaDescription>
      <SaveButton onPress={saveTask}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>
          Salvar
        </Text>
      </SaveButton>
    </Container>
  );
};

export default AddTask;

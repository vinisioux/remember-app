import React, { useState } from 'react';
import { Button, Text, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import ReactNativeAN from 'react-native-alarm-notification';
import Id from '../../utils/randomId';
import { openDatabase } from 'react-native-sqlite-storage';

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
  const db = openDatabase({ name: 'schedules.db' });

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
    const fire_date = ReactNativeAN.parseDate(date);
    const id = Id();

    const alarmData = {
      alarm_id: id,
      title: taskTitle,
      message: taskDescription || ' ',
      small_icon: 'ic_launcher',
      large_icon: 'ic_launcher_round',
      schedule_once: true,
      fire_date,
      channel: 'wakeup',
      has_button: true,
      play_sound: false,
    };

    ReactNativeAN.scheduleAlarm(alarmData);

    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO schedules (id, title, description, date_time, created_at) VALUES (?,?,?,?,?)',
        [
          id,
          taskTitle,
          taskDescription || ' ',
          String(date),
          format(date, 'yyyy-MM-dd HH:mm:ss'),
        ],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso!',
              'Lembrete cadastrado',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Main'),
                },
              ],
              { cancelable: false },
            );
          } else {
            Alert.alert('Falha ao cadastrar');
          }
        },
      );
    });
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

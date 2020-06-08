import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';

import Routes from './routes';

const App = () => {
  const db = openDatabase({ name: 'schedules.db' });
  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='schedules'",
        [],
        (tx, res) => {
          // console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS schedules', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS schedules(id INTEGER PRIMARY KEY, title VARCHAR(20), description VARCHAR(100), date_time VARCHAR(20), created_at DATETIME)',
              [],
            );
          }
        },
      );
    });
  }, [db]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7539dd" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;

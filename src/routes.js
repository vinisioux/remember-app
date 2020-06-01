import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTitle: 'Remember',
        },
      },
      AddTask: {
        screen: AddTask,
        navigationOptions: {
          headerTitle: 'Adicionar',
        },
      },
      TaskDetail: {
        screen: TaskDetail,
        navigationOptions: {
          headerTitle: 'Detalhes',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7539dd',
        },
      },
    },
  ),
);

export default Routes;

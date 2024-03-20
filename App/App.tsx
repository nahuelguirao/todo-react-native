import {View} from 'react-native';
import {styles} from './styles/styles';
import {AddTask} from './components/AddTask';
import {TasksContainer} from './components/TasksContainer';

export function App() {
  return (
    <View style={styles.main}>
      <AddTask />
      <TasksContainer />
    </View>
  );
}

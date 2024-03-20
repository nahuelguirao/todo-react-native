import {FlatList, View} from 'react-native';
import {styles} from '../styles/styles';
import {RenderTask} from './RenderTask';
import {useContext} from 'react';
import {TasksContext} from '../context/TasksContext';

export function TasksContainer() {
  const {tasks} = useContext(TasksContext);
  return (
    <View style={styles.scrollContainer}>
      <FlatList
        renderItem={({item}) => <RenderTask item={item} />}
        data={tasks}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

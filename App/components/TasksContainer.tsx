import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from '../styles/styles';
import {RenderTask} from './RenderTask';
import {useContext} from 'react';
import {TasksContext} from '../context/TasksContext';

export function TasksContainer() {
  const {isLoading, tasks} = useContext(TasksContext);
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {tasks.length >= 1 ? (
            <View style={styles.scrollContainer}>
              <FlatList
                renderItem={({item}) => <RenderTask item={item} />}
                data={tasks}
                // horizontal
                keyExtractor={item => item.id.toString()}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.centerText}>No tasks, add one!</Text>
            </View>
          )}
        </>
      )}
    </>
  );
}

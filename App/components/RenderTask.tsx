import {Text, TouchableOpacity, View} from 'react-native';
import {Task} from '../types/types';
import {styles} from '../styles/styles';
import {useContext} from 'react';
import {TasksContext} from '../context/TasksContext';

interface Props {
  item: Task;
}

export function RenderTask({item}: Props) {
  const {handleDone, handleDelete} = useContext(TasksContext);

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleDone(item.id)}>
        <Text style={item.done ? styles.finishText : styles.text}>
          {item.title}
        </Text>
        <Text style={styles.text}>{item.date}</Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity
          style={styles.cardDelete}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.whiteText}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

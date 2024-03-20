import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/styles';
import {useAddTask} from '../hooks/useAddTask';

export function AddTask() {
  const {inputValue, setInputValue, verificateAddTask} = useAddTask();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pending tasks</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Do homework..."
          value={inputValue}
          onChangeText={(t: string) => setInputValue(t)}
        />
        <TouchableOpacity style={styles.button} onPress={verificateAddTask}>
          <Text style={styles.whiteText}>Add task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

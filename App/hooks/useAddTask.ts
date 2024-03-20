import {useContext, useState} from 'react';
import {TasksContext} from '../context/TasksContext';
import {Alert} from 'react-native';

export function useAddTask() {
  const [inputValue, setInputValue] = useState('');
  const {handleAddTask} = useContext(TasksContext);

  const verificateAddTask = () => {
    if (inputValue.length >= 1) {
      handleAddTask(inputValue);
      setInputValue('');
      return;
    }
    Alert.alert('Add task title');
  };

  return {inputValue, setInputValue, verificateAddTask};
}

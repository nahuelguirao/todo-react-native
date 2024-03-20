import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import {Task} from '../types/types';
import {Alert} from 'react-native';

export function useManageTaskState() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const storeData = async () => {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getData = async () => {
    setIsLoading(true);
    const tasks = await AsyncStorage.getItem('tasks');
    setTasks(tasks ? JSON.parse(tasks) : []);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData();
  }, [tasks]);

  const handleAddTask = (inputValue: string) => {
    const newTask = {
      id: uuid.v4(),
      title: inputValue,
      done: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleDone = (id: string) => {
    const newState = tasks.map(t => (t.id === id ? {...t, done: !t.done} : t));
    setTasks(newState);
  };

  const handleDelete = (id: string) => {
    Alert.alert('Confirmation', 'Are you sure you want to delete it?', [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => setTasks(tasks.filter(t => t.id !== id)),
      },
    ]);
  };

  return {isLoading, tasks, handleAddTask, handleDone, handleDelete};
}

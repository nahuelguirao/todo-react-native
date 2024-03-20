import {ReactNode, createContext, useState} from 'react';
import {Task} from '../types/types';

interface ContextProps {
  tasks: Task[];
  handleAddTask: (title: string) => void;
  handleDone: (id: number) => void;
  handleDelete: (id: number) => void;
}

export const TasksContext = createContext<ContextProps>({
  tasks: [],
  handleAddTask: () => {},
  handleDone: () => {},
  handleDelete: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const TasksContextProvider = ({children}: ProviderProps) => {
  const [tasks, setTasks] = useState([
    {id: 1, done: false, title: 'Task 1', date: '19/03/2024'},
    {id: 2, done: false, title: 'Task 2', date: '19/03/2024'},
    {id: 3, done: true, title: 'Task 3', date: '19/03/2024'},
  ]);

  const handleAddTask = (inputValue: string) => {
    const newTask = {
      id: tasks.length + 1,
      title: inputValue,
      done: false,
      date: '20/03/2024',
    };
    setTasks([...tasks, newTask]);
  };

  const handleDone = (id: number) => {
    const newState = tasks.map(t => (t.id === id ? {...t, done: !t.done} : t));
    setTasks(newState);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{tasks, handleAddTask, handleDone, handleDelete}}>
      {children}
    </TasksContext.Provider>
  );
};

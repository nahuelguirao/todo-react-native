import {ReactNode, createContext} from 'react';
import {Task} from '../types/types';
import {useManageTaskState} from '../hooks/useManageTaskState';

interface ContextProps {
  isLoading: boolean;
  tasks: Task[];
  handleAddTask: (title: string) => void;
  handleDone: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const TasksContext = createContext<ContextProps>({
  isLoading: false,
  tasks: [],
  handleAddTask: () => {},
  handleDone: () => {},
  handleDelete: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const TasksContextProvider = ({children}: ProviderProps) => {
  const {isLoading, tasks, handleAddTask, handleDone, handleDelete} =
    useManageTaskState();

  return (
    <TasksContext.Provider
      value={{isLoading, tasks, handleAddTask, handleDone, handleDelete}}>
      {children}
    </TasksContext.Provider>
  );
};

import {App} from './App';
import {TasksContextProvider} from './context/TasksContext';

export function Main() {
  return (
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  );
}

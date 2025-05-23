import { useState } from 'react';

export function useTasks(initialTasks = []) {
  const [tasks, setTasks] = useState(initialTasks.map(task => ({
    ...task,
    done: task.done ?? false
  })));

  const addTask = (text) => {
    setTasks(prev => [...prev, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const onToggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? {... task, done: !task.done} : task
      )
    )
  }

  const clearAllTasks = () => {
    setTasks([]);
  };

  return { tasks, addTask, removeTask, onToggleTask, clearAllTasks };
}
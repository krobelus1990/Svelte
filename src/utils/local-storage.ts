const TODO_KEY = 'svelte_todo_list';

const getItem = (key: string) =>
  key ? JSON.parse(localStorage.getItem(key)) : null;

const setItem = (key: string, value: any) =>
  key ? localStorage.setItem(key, JSON.stringify(value)) : null;

const removeItem = (key: string) => (key ? localStorage.removeItem(key) : null);

export { getItem, setItem, removeItem, TODO_KEY };

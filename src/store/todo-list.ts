import { Writable, writable } from 'svelte/store';
import { getItem, TODO_KEY } from '@/utils/local-storage';

const createTodo = () => {
  interface ITodoStore {
    items: TodoItem[];
  }

  const { subscribe, update }: Writable<ITodoStore> = writable({
    items: getItem(TODO_KEY) || [],
  });

  const addNewTodo = (title: string, num: number) => {
    if (!title || !title.trim()) {
      return;
    }
    const todo: TodoItem = {
      id: `${new Date().getTime()}`,
      title,
      num,
      isCompleted: false,
    };
    update((prev) => {
      prev.items = [...prev.items, todo];
      return prev;
    });
  };

  const remove = (todo: TodoItem) => {
    update((prev) => {
      prev.items = prev.items.filter((t) => t.id !== todo.id);
      return prev;
    });
  };

  const editTitle = (id: string, title: string) => {
    if (!id) {
      return;
    }
    update((prev) => {
      if (!title) {
        prev.items = prev.items.filter((todo) => todo.id !== id);
      } else {
        const editedId = prev.items.findIndex((todo) => todo.id === id);
        if (editedId) {
          prev.items[editedId].title = title;
        }
      }
      return prev;
    });
  };

  const plus = (id: string, num: number) => {
    update((prev) => {
      const plusId = prev.items.findIndex((todo) => todo.id === id);
      prev.items[plusId].num = num + 1;
      return prev;
    });
  };

  const minus = (id: string, num: number) => {
    update((prev) => {
      const plusId = prev.items.findIndex((todo) => todo.id === id);
      if (prev.items[plusId].num > 0) {
        prev.items[plusId].num = num - 1;
      }
      return prev;
    });
  };

  const format = (id: string) => {
    update((prev) => {
      const plusId = prev.items.findIndex((todo) => todo.id === id);
      prev.items[plusId].num = 0;
      return prev;
    });
  };

  return {
    subscribe,
    remove,
    addNewTodo,
    editTitle,
    plus,
    minus,
    format,
  };
};

export const todoStore = createTodo();

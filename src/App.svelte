<script lang="ts">
  import { onDestroy } from 'svelte';

  import Button from '@/components/add-button/index.svelte';
  import TodoList from '@/components/todo-list/index.svelte';
  import { todoStore } from '@/store/todo-list';
  import { removeItem, setItem, TODO_KEY } from '@/utils/local-storage';

  $: todoList = $todoStore.items;

  let counter: string[];
  let sum: number;

  const unsubscribeTodo = todoStore.subscribe(({ items }) => {
    if (items?.length) {
      setItem(TODO_KEY, items);
    } else {
      removeItem(TODO_KEY);
    }
  });

  onDestroy(unsubscribeTodo);

  $: {
    sum = 0;
    counter = [];
    todoList.map((item: TodoItem) => {
      sum += item.num;
      counter.push(item.title);
    });
  }
</script>

<div class="text-align">
  <main>
    <h1>Multiple Counter</h1>
    <div class="wrap-todo">
      <TodoList {todoList} />
    </div>
    <Button />
  </main>
  <div>
    Counter list:{counter.join(', ')}
  </div>
  <div>
    Sum:{sum}
  </div>
</div>

<style lang="scss">
  @import './App.scss';
</style>

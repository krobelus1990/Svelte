<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { todoStore } from '@/store/todo-list';
  import { ClickOutside } from '@/utils/helpers';

  export let todoItem: TodoItem;
  let showInput: boolean = false;
  let inputRef: HTMLElement;

  afterUpdate(() => {
    if (showInput === true) {
      inputRef.focus();
    }
  });

  const onRemove = () => {
    todoStore.remove(todoItem);
  };

  const onChangeInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    todoStore.editTitle(todoItem.id, target.value);
  };

  const onIncrease = () => {
    todoStore.plus(todoItem.id, todoItem.num);
  };

  const onDecrease = () => {
    todoStore.minus(todoItem.id, todoItem.num);
  };

  const onFormat = () => {
    todoStore.format(todoItem.id);
  };
</script>

<div class="todo-item">
  <div
    class="todo-value"
    use:ClickOutside
  >
      <input
        class="todo-title"
        on:change={onChangeInput}
        bind:value={todoItem.title}
      />

  </div>
  <div>
    {todoItem.num}
  </div>
  <div class="button-group">
    <button class="increase-button" on:click={onIncrease}>+</button>
    <button class="decrease-button" on:click={onDecrease}>-</button>
    <button class="format-button" on:click={onFormat}>0</button>
    <button class="remove-button" on:click={onRemove}>x</button>
  </div>
</div>

<style lang="scss">
  @import './style.scss';
</style>

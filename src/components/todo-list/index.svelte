<script lang="ts">
  import Item from './item/index.svelte';

  export let todoList: Array<TodoItem> = [];
</script>

{#each todoList as todoItem (todoItem.id)}
  <div class="todo-list">
    <Item {todoItem} />
  </div>
{/each}

<style lang="scss">
  @import './style.scss';
</style>

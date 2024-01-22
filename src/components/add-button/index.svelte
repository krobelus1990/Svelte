<script lang="ts">
  import { todoStore } from '@/store/todo-list';

  const onClick = () => {
    todoStore.addNewTodo('new', 0);
  };
</script>

<div>
  <button class="add-button" on:click={onClick}>New counter</button>
</div>

<style lang="scss">
  @import './style.scss';
</style>

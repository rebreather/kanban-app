<template>
  <ul class="board-tasks">
    <li
      v-for="list in lists"
      :key="list.id"
    >
      <KbnTaskList v-bind="list" />
    </li>
  </ul>
</template>

<script>
import KbnTaskList from '@/components/organsms/KbnTaskList.vue'

export default {
  name: 'KbBoardTask',

  components: {
    KbnTaskList
  },

  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  min-height: 100vh;
  list-style-type: none;
  margin: 16px;
  padding: 0;
}
ul li {
  width: 192px;
  margin-right: 8px;
  border: thin solid rgba(255, 255, 249,0);
  border-radius: 0.5em;
}
</style>
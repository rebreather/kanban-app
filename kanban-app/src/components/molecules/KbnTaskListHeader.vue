<template>
  <div class="task-list-header">
    <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="actions">
      <KbnButton
        type="text"
        @click="$emit('add')"
      >
        <KbnIcon name="add" />
      </KbnButton>
    </div>
  </div>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'
import KbnIcon from '@/components/atoms/KbnIcon.vue'

export default {
  name: 'KbnTaskListHeader',

  components: {
    KbnButton,
    KbnIcon
  },

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.task-list-header {
  display: flex;
  border-bottom: thin solid rgb(255, 255, 249);
}
.title {
  flex: 1;
}
h2 {
  margin: 0px;
  padding-left: 8px;
  font-size: 1.0em;
  text-align: left;
  color: rgb(255, 255, 249);
}
.actions {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  cursor: pointer;
  background-color: rgba(255,255,255, 0) !important;
  color: white;
}
</style>
<template>
  <nav class="board-navigation">
    <div class="title">
      <h1>Kanban App</h1>
    </div>
    <div class="actions">
      <KbnButton
        type="text"
        @click="$emit('logout')"
      >
        Logout
      </KbnButton>
    </div>
  </nav>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  name: 'KbnBoardNavigation',

  components: {
    KbnButton
  }
}
</script>

<style scoped>
.board-navigation {
  display: flex;
  border-bottom: .1em solid rgb(255, 255, 249);
  margin-top: .2em;
}
.title {
  flex: 1;
}
h1 {
  margin:0em;
  color:rgb(255, 255, 249);
}
.actions {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
button {
  cursor: pointer;
  background-color: rgba(255,156,146, 1) !important;
  color: white;
  border-radius: 20px;
  padding: 0.2em 0.8em;
  width:80%;
}
</style>
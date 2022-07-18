<template>
  <form
    class="task-detail-form"
    novalidate
  >
    <div class="form-item">
      <label for="task-name">태스크 이름</label>
      <input
        id="task-name"
        v-model="task.name"
        type="text"
      >
    </div>
    <div class="form-item">
      <label for="task-description">태스크 설명</label>
      <textarea
        id="task-description"
        v-model="task.description"
      />
    </div>
    <div class="form-actions">
      <KbnButton
        :disabled="progress"
        @click="handleClick"
      >
        수정
      </KbnButton>
      <p
        v-if="progress"
        class="update-progress"
      >
        수정 중...
      </p>
      <p
        v-if="error"
        class="update-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'

export default {
  name: 'KbnTaskDetailFrom',

  components: {
    KbnButton
  },

  props: {
    task: {
      type: Object,
      required: true,
      default: () => {}
    },
    onupdate: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      progress: false,
      error: ''
    }
  },

  methods: {
    handleClick (ev) {
      // 수정 처리 중에 중복 실행되지 않도록 방지하는 가드
      if (this.progress) { return }

      this.progress = true // 수정 처리 중

      this.$nextTick(() => {
        this.onupdate(this.task)
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })
    }
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
  background-color: #012c4f;
  color: white;
}
label {
  display: block;
}
input, textarea {
  width: 99%;
  margin-top:.3em;
  margin-bottom: .2em;
  color:white;
  background: transparent;
  /* background-color: rgba(255,255,255, .1) !important; */
  border: 1px solid white;
  border-radius: 10px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
}
button {
  cursor: pointer;
  background-color: rgba(255,255,255, 0) !important;
  color: white;
}
</style>
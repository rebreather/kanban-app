<template>
  <span :class="classes">
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: 'KbnIcon',

  props: {
    name: {
      type: String,
      required: true,
      validator: value => {
        return ['close', 'remove', 'add'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    classes () {
      return ['kbn-icon', this.name]
    },

    icon () {
      const name = this.name
      if (name === 'close' || name === 'remove') {
        return 'x'
      } else if (name === 'add') {
        return '+'
      }
    }
  }
}
</script>

<style scoped>
.kbn-icon {
  border: none;
  color: white;
  background: transparent;
  background-color: rgba(255,255,255, 0) !important;
}
</style>
<!-- eslint-disable  -->
<template>
    <button
        :class="classes"
        :disabled="disabled"
        type="button"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: 'KbnButton',

    props : {
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default:false
        }
    },

    computed: {
        //type 값에 따라 동적으로 클래스 생성
        classes() {
            const cls = this.type === 'text' ? ('-' + this.type) : ''
            return [`kbn-button${cls}`]
        }
    },

    methods: {
        // click 이벤트 발생
        handleClick(ev) {
            this.$emit('click', ev)
        }
    }
}
</script>

<style scoped>
    .kbn-button {
        padding: .6em 1.3em;
        border: none;
        border-radius: 40px;
        color: white;
        background: transparent;
        background-color: rgba(255,156,146, 1) !important;

    }
    .kbn-button-text {
        border: none;
        padding-right: 0;
        padding-left: 0;
          font-family: Georgia, 'Times New Roman', Times, serif;
    }
</style>
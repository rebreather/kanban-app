<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">Email Address</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="EX: kanban@domain.com"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.email.format">이메일 주소 형식에 어긋납니다.</li>
        <li v-if="!validation.email.required">이메일 주소가 입력되지 않았습니다.</li>
      </ul>
    </div>
    <div class="form-item">
      <label for="passowrd">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="EX: xxxxxxxx"
        @focus="resetError">
      <ul class="validation-errors">
        <li v-if="!validation.password.required">패스워드가 입력되지 않았습니다.</li>
      </ul>
    </div>
    <div class="form-actions">
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        Login
      </KbnButton>
      <p
        v-if="progress"
        class="login-progress"
      >
        ing...
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
// KbnButton 임포트
import KbnButton from '@/components/atoms/KbnButton.vue'
// 이메일 주소 형식 정규표현식
const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const required = val => !!val.trim()

export default {
  name: 'KbnLoginForm',

  components: {
    KbnButton
  },

  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      email: '',
      password: '',
      progress: false,
      error: ''
    }
  },

  computed: {
    validation () { // email, password 유효성 검사
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        }
      }
    },

    valid () {
      const validation = this.validation // 앞에서 정의한 validation을 사용해 유효 여부 반환
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },

    disableLoginAction () { // valid를 이용해 로그인 처리 기능 여부, progress는 뒤에 설명
      return !this.valid || this.progress
    }
  },

  methods: {
    resetError () {
      this.error = ''
    },

    handleClick (ev) {
      if (this.disableLoginAction) { return } // 사유가 있을시 로그인 처리가 안 되도록 하는 막는 가드

      this.progress = true // 로그인 처리 중임을 나타냄
      this.error = ''

      this.$nextTick(() => {
        this.onlogin({ email: this.email, password: this.password })
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
}
label {
  display: block;
  color: white;
  padding-left: 20px;
  margin-bottom: 3px;
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight: lighter;
}
input {
  width: 100%;
  height: 30px;
  padding: .5em;
  font:inherit;
  color:white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background: transparent;
  background-color: rgba(255,255,255, .1) !important;
	/* border: 1px solid transparent; */
	border: none;
  border-radius: 40px;
	padding-left: 20px;
	padding-right: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
  color: white;
}
.validation-errors {
  height: 32px;
  padding-left: 20px;
}
.form-actions p {
  font-size: 0.5em;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
<template>
  <div class="login">
    <article class="form__group">
      <input type="text" v-model="userId" class="form__input" placeholder="사용하실 아이디를 입력해주세요." required autofocus @keyup.enter="tryLogin"/>
    </article>
    <article class="form__button">
      <button class="button">
        <div class="button__content" @click="tryLogin">
          <div class="button__icon"></div>
        </div>
      </button>
    </article>
  </div>
</template>
<script>
export default {
  methods: {
    tryLogin() {
      if (this.userId.length>0) {
        this.$router.push({ path: `/board/${this.userId}`});
      }
    },
  },
  data: function () {
    return {
      userId: '',
    }
  },
}
</script>
<style scoped>
  .login {
    display: flex;
  }
  .form__button {
    text-align: center;
    padding-top: 100px;
  }
  .form__group {
    padding-top: 100px;
    width: 500px;
  }
  .form__input {
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 90%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }
  .button {
    position: relative;
    padding: 0;
    width: 100px;
    height: 100px;
    border: 4px solid #888888;
    outline: none;
    background-color: #f4f5f6;
    border-radius: 40px;
    box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff, -20px 0px 30px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.2);
    transition: 0.13s ease-in-out;
    cursor: pointer;
  }
  .button:active {
    box-shadow: none;
  }
  .button:active .button__content {
    box-shadow: none;
  }
  .button__content {
    position: relative;
    display: grid;
    padding: 20px;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    box-shadow: inset 0px -8px 0px #dddddd, 0px -8px 0px #f4f5f6;
    border-radius: 40px;
    transition: 0.13s ease-in-out;
    z-index: 1;
  }
  .button__icon {
    position: relative;
    display: flex;
    transform: translate3d(0px, -4px, 0px);
    grid-column: 4;
    align-self: start;
    justify-self: end;
    width: 32px;
    height: 32px;
    transition: 0.13s ease-in-out;
  }
</style>
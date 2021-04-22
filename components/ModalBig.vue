<template>
  <transition name="modal">
    <modal-base
      modal-class="modal-big"
      v-if="showModal"
      @close="showModal = false"
    >
      <template #header>
        <h3>Welcome to wisnet '96 edition</h3>
      </template>
      <template #body>
        <p>
          To celebrate our 25 years of going fearlessly into the 'net, we've revived our website from our dot-com era founding. From day one of our startup, we’ve paired extraordinary customer care
          with:
        </p>
        <ul class="values-list">
          <li>innovation &amp; imagination</li>
          <li>measured results & risk-tasking</li>
        </ul>
        <ul class="values-list">
          <li>play &amp; hard work</li>
          <li>community &amp; culture</li>
          <li> Geeks &amp; Creative</li>
        </ul>
<!--        <p>Enjoy the Throwback!</p>-->
      </template>
      <template #footer>
        <a
          href="#"
          @click="showModal = false"
          class="btn"
        >Enjoy the throwback</a>
      </template>
    </modal-base>
  </transition>
</template>

<script>

import ModalBase from '@/components/ModalBase.vue'
export default {
  name: 'ModalBig',
  components: {
    ModalBase
  },
  data: function () {
    return {
      showModal: true
    }
  }
}
</script>

<style lang="scss">
.link-bold-block {
  display: block;
  font-weight: bold;
  margin-top: 15px;
  color: #f26729;
}
.modal-big {
  .modal-container {
    position: relative;
    width: 100%;
    max-width: 1000px;
    padding: 3% 4%;
    background: #fff url('@/static/floppy.png');
    border-radius: 20px;
    color: var(--wisnet-color-blue-350);
    font-family: 'Spartan', sans-serif;

    &:after {
      content: '';
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: block;
      width: 229px;
      height: 171px;
      background: url('@/static/modal-96.png');
      background-size: cover;
    }
  }

  .modal-header h3 {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 80px;
    font-weight: 900;
  }

  .modal-body {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;
  }

  .values-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-weight: bold;
      font-size: 20px;

      &:after {
        content: '/';
        margin: 0 15px;
        color: var(--wisnet-color-orange);
      }

      &:last-child:after {
        display: none;
      }
    }
  }

  .btn {
    display: inline-block;
    background: var(--wisnet-color-blue-350);
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 15px 30px;
    text-decoration: none;
    margin-top: 30px;
  }
}

</style>

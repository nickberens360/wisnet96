<template>
  <div
    class="modal-mask"
    :class="modalClass"
  >
    <span
      class="modal-click-off"
      @click="$emit('close')"
    />
    <div class="modal-wrapper">
      <div class="modal-container">
        <span
          class="modal-default-button"
          @click="$emit('close')"
        >
          x
        </span>
        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBase',
  props: {
    modalClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: ['close']
}
</script>

<style lang="scss">

.modal-click-off {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  position: absolute;
  right: 20px;
  top: 10px;
  color: black;
  font-size: 40px;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media only screen and (max-width: 1050px) {
  .modal-container {
    max-width: 90%;
    h3 {
      font-size: 34px;
    }
  }
  .modal-body {
    font-size: 18px;
  }
  .values-list li {
    font-size: 17px;
  }
  .btn {
    font-size: 18px;
  }
}

@media only screen and ( max-width: 960px ){
  .modal-container {
    max-width: 90%;
    height: 90vh;
    overflow: auto;
    &:after {
      display: none;
    }
  }
}

</style>

<template>
  <div class="page-header">
    <div v-if="$route.name === 'WisnetDevelopers'">
      <img
        alt="dots"
        src="@/assets/dots.gif"
      >
      <br>
      <br>
    </div>
    <img
      :src="imageSrc"
      alt=""
    >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    imageSrc: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

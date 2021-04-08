<template>
  <a
      :href="link.url"
      :target="link.target"
      class="button-round"
  >
    <div class="button-round__image">
      <img
          alt="wisnet 96 logo"
          :src="img.url"
      >
    </div>
    <div class="button-round__text">
      <h4 class="button-round__heading">{{ heading }}</h4>
      <p>{{ text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ButtonRound',
  props: {
    heading: {
      type: String,
    },
    text: {
      type: String,
    },
    img: {
      type: Object,
    },
    link: {
      type: Object,
    },
  }
}

</script>

<style scoped lang="scss">
.button-round {
  position: fixed;
  z-index: 10;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 390px;
  padding: 15px;
  border-radius: 100px 20px 20px 100px;
  background: var(--wisnet-color-orange);
  font-family: 'Spartan', sans-serif;
  text-decoration: none;
}

.button-round__text {
  text-align: center;

  p {
    max-width: 200px;
    margin: auto;
    color: var(--wisnet-color-cream);
    text-decoration: underline;
    font-weight: bold;
    line-height: 1.25;
  }
}

.button-round__heading {
  font-size: 21px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 10px;
  color: black;
}

@media only screen and (max-width: 815px) {
  .button-round {
    justify-content: center;
    max-width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    padding: 10px;
  }
  .button-round__image {
    img {
      max-width: 75px;
    }
  }
  .button-round__heading {
    font-size: 18px;
    margin-bottom: 2px;
  }
  .button-round__text {
    p {
      font-size: 13px;
    }
  }
}
</style>

<template>
  <a
    href="https://www.wisnet.com/"
    target="_blank"
    class="button-round"
  >
    <div class="button-round__image">
      <img
        alt="wisnet 96 logo"
        src="/button-96.png"
      >
    </div>
    <div class="button-round__text">
      <h4 class="button-round__heading">25 Years of wisnet!</h4>
      <p>Learn more about the Geeks & Creatives</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ButtonRound'
}
</script>

<style scoped lang="scss">
.button-round {
  position: fixed;
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

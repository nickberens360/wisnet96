<template>

  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      class="file-window--md"
      title="Welcome"
      style="max-width: 755px;"
  >

    <template v-slot:content>
      <div class="text-center">
        <img src="https://i.imgur.com/ErWuQ2t.gif" alt="">
        <h2 style="color: red">Welcome to wisnet '96 edition</h2>
        <br>
        <p>To celebrate our 25 years of going fearlessly into the 'net, we've revived our website from our dot-com era founding. From day one of our startup, we’ve paired extraordinary customer care
          with:</p>
        <p><span class="emoji">🧠</span> innovation & imagination <br>
          <span class="emoji">📐</span> measured results & risk-tasking <br>
          <span class="emoji">🎲</span> play & hard work <br>
          <span class="emoji">🏘</span>️ community & culture <br>
          <span class="emoji">🤓</span> Geeks & <span class="emoji">🧑‍🎨 </span>Creative</p>

        <NuxtLink exact to="/page/about-wisconsin-networks" class="btn btn-lg">
          Enjoy the Throwback!
        </NuxtLink>
      </div>
    </template>
  </FileWindow>


</template>

<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";

export default {
  layout: 'default',
  components: {FileWindow},
};
</script>

<style scoped lang="scss">
.file-window {
  /deep/ .card-body {
    padding: 20px;
    background: #fff url('@/static/floppy.png');
  }
  /*.btn-tertiary {
    background-color: #000181;
    color: white !important;
  }*/

  p {
    font-size: 16px;
    line-height: 1.75;
  }

  .emoji {
    font-size: 30px;
  }
}

</style>



<template>
  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      title="Meet the Team"
      class="file-window--md text-center bg-white"
  >

    <template v-slot:content>

      <div class="team-grid">
        <div
            v-for="item in posts"
            :key="item.id"
            class="p-2 mb-2 team-member"
        >
          <NuxtLink
              :to="'team/'+item.slug" class="font-small"
          >
            <img style="max-width: 100%;" :src="item.featured_img_url" alt="">

            {{ item.title.rendered }}
          </NuxtLink>

        </div>
      </div>

    </template>

  </FileWindow>

</template>


<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";


export default {

  components: {FileWindow},
  computed: {
    posts() {
      return this.$store.state.team;
    }
  },
};
</script>

<style lang="scss" scoped>
.file-window {
  /deep/ .card-body {
    padding: 20px;
    background: #fff url('@/static/floppy.png');
  }
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.team-member {
  flex: 1 0 24%;
  max-width: 24%;
  &:last-of-type {
    margin-right: auto;
  }
  @media only screen and ( max-width: 700px ){
    flex: 1 0 49%;
    max-width: 49%;
  }
}
</style>



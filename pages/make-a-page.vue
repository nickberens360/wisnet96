<template>

  <FileWindow
      :id="$route.name"
      :title-id="$route.name+'-handle'"
      class="file-window--sm"
      title="Make a Page"
      style="max-width: 500px;"
  >

    <template v-slot:content>
      <form action="#" class="mt-4">

        <div class="text-center">
          <img src="https://lh3.googleusercontent.com/proxy/xzfGjmqhiJjdToWO2QTJnmGORjs4y_d8OOYhhemHNWDPqcP6ya9Z-PJsfgRaCAuu53YMVxWPdFTTvVgT_6x8cDJe9IwNBnOf6wKhFNlQfVO7eFqKIj8y4AvZ_whCZQdOlP86BSDruVj4LHupTwrOhGahPBXL-A" alt="">
        </div>

        <div class="form-group">
          <label for="email" class="mb-2">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Your email" required="">
        </div>

        <div class="form-group">
          <label for="password" class="mb-2">Input</label>
          <input id="password" type="password" class="form-control" required="">
        </div>

        <div class="form-group">
          <label for="password" class="mb-2">Input</label>
          <input id="password" type="password" class="form-control" required="">
        </div>

        <div class="form-group">
          <label for="password" class="mb-2">Logo</label>
          <input style="background: none !important; border: none !important;" id="file" type="file" required="">
        </div>



        <button type="submit" class="btn btn-block btn-primary">Submit</button>
      </form>
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
.file-window--sm {
  max-width: 755px;
  /deep/ .card-body {
    padding: 20px;
  }

}

</style>



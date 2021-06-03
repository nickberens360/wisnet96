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


